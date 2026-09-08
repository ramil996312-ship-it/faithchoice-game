// Добавление email в группу внешнего тестирования TestFlight по названию группы.
// Использование: node add-testers.js "Друзья" email1@x.com email2@x.com ...
const { makeToken, APP_ID } = require('./jwt.js');

const API = 'https://api.appstoreconnect.apple.com/v1';

async function api(pathAndQuery, opts = {}) {
  const res = await fetch(API + pathAndQuery, {
    ...opts,
    headers: { Authorization: `Bearer ${makeToken()}`, 'Content-Type': 'application/json', ...(opts.headers || {}) },
  });
  const text = await res.text();
  const body = text ? JSON.parse(text) : null;
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(body)}`);
  return body;
}

async function findGroupId(groupName) {
  const res = await api(`/apps/${APP_ID}/betaGroups`);
  const group = res.data.find(g => g.attributes.name === groupName);
  if (!group) throw new Error(`Группа "${groupName}" не найдена. Есть: ${res.data.map(g => g.attributes.name).join(', ')}`);
  return group.id;
}

async function addTester(groupId, email) {
  return api('/betaTesters', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        type: 'betaTesters',
        attributes: { email },
        relationships: { betaGroups: { data: [{ type: 'betaGroups', id: groupId }] } },
      },
    }),
  });
}

async function main() {
  const [groupName, ...emails] = process.argv.slice(2);
  if (!groupName || !emails.length) {
    console.error('Использование: node add-testers.js "Имя группы" email1 email2 ...');
    process.exit(1);
  }
  const groupId = await findGroupId(groupName);
  for (const email of emails) {
    try {
      await addTester(groupId, email);
      console.log(`OK: ${email}`);
    } catch (err) {
      console.log(`ОШИБКА (${email}): ${err.message}`);
    }
  }
}

main().catch(err => { console.error('FATAL:', err.message); process.exit(1); });
