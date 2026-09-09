// Добавление email в список тестировщиков трека Google Play (по умолчанию closed testing "alpha").
// Использование: node play-api/add-testers.js [track] email1 email2 ...
const { getAccessToken, api } = require('./auth.js');

async function main() {
  let [track, ...emails] = process.argv.slice(2);
  if (!track || !emails.length) {
    console.error('Использование: node add-testers.js [track] email1 email2 ...');
    process.exit(1);
  }
  // если первый аргумент похож на email, значит track не передали — используем alpha по умолчанию
  if (track.includes('@')) { emails = [track, ...emails]; track = 'alpha'; }

  const token = await getAccessToken();
  const edit = await api(token, '/edits', { method: 'POST', body: '{}' });
  console.log('Edit ID:', edit.id);

  const current = await api(token, `/edits/${edit.id}/testers/${track}`).catch(() => ({ googleEmails: [] }));
  const existing = new Set(current.googleEmails || []);
  emails.forEach(e => existing.add(e));

  await api(token, `/edits/${edit.id}/testers/${track}`, {
    method: 'PUT',
    body: JSON.stringify({ googleEmails: [...existing] }),
  });

  await api(token, `/edits/${edit.id}:commit`, { method: 'POST' });
  console.log(`Готово. Всего в списке "${track}": ${existing.size}`);
  console.log([...existing].join('\n'));
}

main().catch(err => { console.error('FATAL:', err.message); process.exit(1); });
