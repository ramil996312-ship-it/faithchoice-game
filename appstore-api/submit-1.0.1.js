// Выпуск iOS 1.0.1: версия + тексты карточки (listing-1.0.1.json) + сборка + экспортный контроль + отправка на ревью.
// Использование:
//   node appstore-api/submit-1.0.1.js --dry-run        только GET-запросы, остальное печатается как план
//   node appstore-api/submit-1.0.1.js 18               полный прогон: ждёт обработки сборки 18, прикрепляет, отправляет
//   node appstore-api/submit-1.0.1.js                  всё, кроме сборки; отправка только если сборка уже прикреплена
// Идемпотентен: существующую версию 1.0.1, локализации, черновик reviewSubmission переиспользует,
// одинаковые поля не перезаписывает — можно спокойно запускать повторно после любой ошибки.
const fs = require('fs');
const path = require('path');
const { makeToken, APP_ID } = require('./jwt.js');

const API = 'https://api.appstoreconnect.apple.com';
const DRY = process.argv.includes('--dry-run');
const BUILD = process.argv.slice(2).find(a => /^\d+$/.test(a));
const LISTING = JSON.parse(fs.readFileSync(path.join(__dirname, 'listing-1.0.1.json'), 'utf8'));
const { version: VERSION, releaseType: RELEASE_TYPE, copyright: COPYRIGHT } = LISTING._meta;
const LOCALES = Object.keys(LISTING).filter(k => !k.startsWith('_'));
const V_FIELDS = ['description', 'keywords', 'promotionalText', 'supportUrl', 'marketingUrl', 'whatsNew'];
const A_FIELDS = ['name', 'subtitle', 'privacyPolicyUrl'];
// READY_FOR_REVIEW = версия уже в черновике/застрявшей отправке, но ещё редактируется и ждёт submitted:true.
const EDITABLE = ['PREPARE_FOR_SUBMISSION', 'READY_FOR_REVIEW', 'DEVELOPER_REJECTED', 'REJECTED', 'METADATA_REJECTED', 'INVALID_BINARY'];
const sleep = ms => new Promise(r => setTimeout(r, ms));

// --- лимиты Apple, проверяются до любого запроса ---
function validate() {
  const errs = [];
  const chars = s => [...s].length;
  for (const loc of LOCALES) {
    const a = LISTING[loc].appInfoLocalization || {}, v = LISTING[loc].appStoreVersionLocalization || {};
    for (const k of Object.keys(a)) if (!A_FIELDS.includes(k)) errs.push(`${loc}: unknown appInfo field ${k}`);
    for (const k of Object.keys(v)) if (!V_FIELDS.includes(k)) errs.push(`${loc}: unknown version field ${k}`);
    for (const k of ['name', 'privacyPolicyUrl']) if (!a[k]) errs.push(`${loc}: ${k} missing`);
    for (const k of ['description', 'keywords', 'supportUrl']) if (!v[k]) errs.push(`${loc}: ${k} missing`);
    const max = { name: [a.name, 30], subtitle: [a.subtitle, 30], promotionalText: [v.promotionalText, 170], description: [v.description, 4000], whatsNew: [v.whatsNew, 4000] };
    for (const [k, [s, n]] of Object.entries(max)) if (s && chars(s) > n) errs.push(`${loc}: ${k} ${chars(s)} > ${n} chars`);
    // Лимит ключевых слов — 100 символов, не байт: живые ru-ключи 1.0 = 97 символов / 184 байта, Apple их принял.
    if (v.keywords && v.keywords.length > 100) errs.push(`${loc}: keywords ${v.keywords.length} > 100 chars`);
    if (v.keywords && /,\s|\s,/.test(v.keywords)) errs.push(`${loc}: keywords have spaces around commas`);
    for (const u of [a.privacyPolicyUrl, v.supportUrl, v.marketingUrl]) if (u && !/^https:\/\//.test(u)) errs.push(`${loc}: bad url ${u}`);
  }
  if (errs.length) throw new Error('listing-1.0.1.json invalid:\n  ' + errs.join('\n  '));
  console.log(`listing OK: ${LOCALES.join(', ')}`);
  for (const loc of LOCALES) {
    const a = LISTING[loc].appInfoLocalization, v = LISTING[loc].appStoreVersionLocalization;
    console.log(`  ${loc.padEnd(8)} name ${chars(a.name)}/30, subtitle ${chars(a.subtitle || '')}/30, keywords ${v.keywords.length}/100, description ${chars(v.description)}/4000, whatsNew ${chars(v.whatsNew || '')}/4000`);
  }
}

const short = v => typeof v === 'string' && v.length > 70 ? JSON.stringify(v.slice(0, 67) + '...') : JSON.stringify(v);
async function api(method, p, body) {
  if (method !== 'GET' && DRY) {
    const attrs = body?.data?.attributes || {};
    const rel = Object.entries(body?.data?.relationships || {}).map(([k, r]) => `${k}=${r.data.id}`).join(' ');
    console.log(`  [plan] ${method} ${p}` + (rel ? `  (${rel})` : '') + (body?.data?.id && !body?.data?.attributes ? `  -> ${body.data.type} ${body.data.id}` : ''));
    for (const [k, v] of Object.entries(attrs)) console.log(`           ${k}: ${short(v)}`);
    return { data: { id: `<new ${body?.data?.type || 'object'}>`, attributes: attrs } };
  }
  const res = await fetch(API + p, {
    method,
    headers: { Authorization: `Bearer ${makeToken()}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  const json = text ? JSON.parse(text) : null;
  if (!res.ok) throw new Error(`${method} ${p} -> HTTP ${res.status}: ${JSON.stringify(json?.errors ?? json)}`);
  return json;
}
const get = p => api('GET', p);

// PATCH только отличающихся полей существующей локализации, POST — новой.
async function upsert(type, parentRel, parentId, existing, locale, fields) {
  if (existing) {
    const changed = Object.fromEntries(Object.entries(fields).filter(([k, v]) => existing.attributes[k] !== v));
    if (!Object.keys(changed).length) return console.log(`  ${type} ${locale}: up to date`);
    return api('PATCH', `/v1/${type}/${existing.id}`, { data: { type, id: existing.id, attributes: changed } });
  }
  return api('POST', `/v1/${type}`, {
    data: { type, attributes: { locale, ...fields }, relationships: { [parentRel]: { data: { type: parentRel + 's', id: parentId } } } },
  });
}

async function main() {
  validate();
  console.log(DRY ? '\n== DRY RUN: GET requests are real, everything else is only printed ==' : '\n== LIVE RUN ==');

  // 1. Версия 1.0.1
  console.log(`\n1) appStoreVersion ${VERSION}`);
  const versions = (await get(`/v1/apps/${APP_ID}/appStoreVersions?filter[platform]=IOS&limit=20`)).data;
  let ver = versions.find(v => v.attributes.versionString === VERSION);
  const liveVer = versions.find(v => v.attributes.appStoreState === 'READY_FOR_SALE');
  if (ver) {
    const st = ver.attributes.appStoreState;
    console.log(`  exists: ${ver.id} (${st})`);
    if (!EDITABLE.includes(st)) {
      console.log(`  ${VERSION} is already past editing (${st}) — nothing to do.`);
      return;
    }
    if (ver.attributes.releaseType !== RELEASE_TYPE) await api('PATCH', `/v1/appStoreVersions/${ver.id}`, { data: { type: 'appStoreVersions', id: ver.id, attributes: { releaseType: RELEASE_TYPE } } });
  } else {
    ver = (await api('POST', '/v1/appStoreVersions', {
      data: {
        type: 'appStoreVersions',
        attributes: { platform: 'IOS', versionString: VERSION, releaseType: RELEASE_TYPE, copyright: COPYRIGHT },
        relationships: { app: { data: { type: 'apps', id: APP_ID } } },
      },
    })).data;
  }
  const verIsNew = DRY && ver.id.startsWith('<');

  // 2. Тексты версии (описание, ключевые слова, что нового...). Apple копирует локализации прошлой версии
  //    в новую — в dry-run новой версии ещё нет, поэтому план строится от локализаций живой 1.0.
  console.log('\n2) appStoreVersionLocalizations' + (verIsNew ? ` (planned against live ${liveVer.attributes.versionString}, which Apple copies into a new version)` : ''));
  const vLocs = (await get(`/v1/appStoreVersions/${verIsNew ? liveVer.id : ver.id}/appStoreVersionLocalizations?limit=50`)).data;
  for (const loc of LOCALES) {
    await upsert('appStoreVersionLocalizations', 'appStoreVersion', ver.id, vLocs.find(x => x.attributes.locale === loc), loc, LISTING[loc].appStoreVersionLocalization);
  }

  // 3. Название/подзаголовок живут на appInfo; редактируется только тот, что создан вместе с новой версией.
  console.log('\n3) appInfoLocalizations');
  let appInfo;
  for (let i = 0; i < 10 && !appInfo; i++) {
    const infos = (await get(`/v1/apps/${APP_ID}/appInfos`)).data;
    appInfo = infos.find(x => EDITABLE.includes(x.attributes.state || x.attributes.appStoreState));
    if (!appInfo && verIsNew) { appInfo = { id: '<new appInfo created with the version>', live: infos.find(x => x.attributes.state === 'READY_FOR_DISTRIBUTION') }; break; }
    if (!appInfo) await sleep(3000);
  }
  if (!appInfo) throw new Error('no editable appInfo found (expected one in PREPARE_FOR_SUBMISSION after creating the version)');
  console.log(`  appInfo ${appInfo.id}` + (appInfo.live ? ` (planned against live appInfo ${appInfo.live.id})` : ''));
  const aLocs = (await get(`/v1/appInfos/${appInfo.live ? appInfo.live.id : appInfo.id}/appInfoLocalizations?limit=50`)).data;
  for (const loc of LOCALES) {
    await upsert('appInfoLocalizations', 'appInfo', appInfo.id, aLocs.find(x => x.attributes.locale === loc), loc, LISTING[loc].appInfoLocalization);
  }

  // 4. Сборка: дождаться обработки, экспортный контроль, прикрепить к версии.
  console.log('\n4) build');
  let attached = verIsNew ? null : (await get(`/v1/appStoreVersions/${ver.id}/build`)).data;
  if (BUILD) {
    let build;
    for (let t0 = Date.now(); ;) {
      build = (await get(`/v1/builds?filter[app]=${APP_ID}&filter[version]=${BUILD}&filter[preReleaseVersion.version]=${VERSION}&limit=1`)).data[0];
      const st = build?.attributes.processingState;
      console.log(`  build ${VERSION} (${BUILD}): ${build ? st : 'not uploaded yet'}`);
      if (st === 'VALID') break;
      if (st === 'FAILED' || st === 'INVALID') throw new Error(`build ${BUILD} processing ${st}`);
      if (DRY) break;
      if (Date.now() - t0 > 90 * 60e3) throw new Error(`build ${BUILD} not processed after 90 min`);
      await sleep(60e3);
    }
    if (build) {
      // Info.plist содержит ITSAppUsesNonExemptEncryption=false, поэтому обычно Apple уже проставил false сам.
      if (build.attributes.usesNonExemptEncryption == null) {
        await api('PATCH', `/v1/builds/${build.id}`, { data: { type: 'builds', id: build.id, attributes: { usesNonExemptEncryption: false } } });
      } else console.log(`  usesNonExemptEncryption already ${build.attributes.usesNonExemptEncryption}`);
      if (attached?.id !== build.id) {
        await api('PATCH', `/v1/appStoreVersions/${ver.id}/relationships/build`, { data: { type: 'builds', id: build.id } });
      } else console.log('  already attached');
      attached = build;
    } else console.log(`  [plan] once build ${BUILD} is VALID: set usesNonExemptEncryption=false if empty, then PATCH /v1/appStoreVersions/${ver.id}/relationships/build`);
  } else {
    console.log(`  no build number given; attached: ${attached ? attached.attributes.version : 'none'}`);
  }
  if (!attached && !DRY) {
    console.log('\nStopped before submission: no build attached. Re-run with the build number, e.g. node appstore-api/submit-1.0.1.js 18');
    return;
  }

  // 5. Отправка на ревью через reviewSubmissions (старый appStoreVersionSubmissions API запрещён).
  console.log('\n5) reviewSubmission');
  const subs = (await get(`/v1/apps/${APP_ID}/reviewSubmissions?filter[platform]=IOS&limit=50`)).data;
  let sub;
  for (const s of subs.filter(s => !['COMPLETE', 'COMPLETING', 'CANCELING'].includes(s.attributes.state))) {
    const items = (await get(`/v1/reviewSubmissions/${s.id}/items?include=appStoreVersion`)).data;
    const hasOurs = items.some(it => it.relationships?.appStoreVersion?.data?.id === ver.id);
    console.log(`  existing ${s.id}: ${s.attributes.state}, items ${items.length}${hasOurs ? ', contains ' + VERSION : ''}`);
    if (hasOurs && ['WAITING_FOR_REVIEW', 'IN_REVIEW'].includes(s.attributes.state)) {
      console.log(`  ${VERSION} is already submitted (${s.attributes.state}).`);
      return;
    }
    // Черновик или «застрявшая» отправка (UNRESOLVED_ISSUES) — переиспользуем: новую Apple не даст (409).
    if (['READY_FOR_REVIEW', 'UNRESOLVED_ISSUES'].includes(s.attributes.state)) { sub = s; sub.hasOurs = hasOurs; break; }
  }
  if (!sub) {
    sub = (await api('POST', '/v1/reviewSubmissions', {
      data: { type: 'reviewSubmissions', attributes: { platform: 'IOS' }, relationships: { app: { data: { type: 'apps', id: APP_ID } } } },
    })).data;
  }
  if (!sub.hasOurs) {
    await api('POST', '/v1/reviewSubmissionItems', {
      data: {
        type: 'reviewSubmissionItems',
        relationships: {
          reviewSubmission: { data: { type: 'reviewSubmissions', id: sub.id } },
          appStoreVersion: { data: { type: 'appStoreVersions', id: ver.id } },
        },
      },
    });
  }
  await api('PATCH', `/v1/reviewSubmissions/${sub.id}`, { data: { type: 'reviewSubmissions', id: sub.id, attributes: { submitted: true } } });

  // 6. Итог
  if (DRY) return console.log('\nDry run finished: nothing was changed.');
  const final = (await get(`/v1/reviewSubmissions/${sub.id}`)).data;
  const v2 = (await get(`/v1/appStoreVersions/${ver.id}`)).data;
  console.log(`\nDONE: reviewSubmission ${final.id} = ${final.attributes.state}; version ${VERSION} = ${v2.attributes.appStoreState}; build ${attached.attributes.version}`);
}

main().catch(e => { console.error('\nFAILED:', e.message); process.exit(1); });
