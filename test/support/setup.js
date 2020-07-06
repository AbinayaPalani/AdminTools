const { setDefaultTimeout, AfterAll, BeforeAll } = require('cucumber');
const { createSession, closeSession } = require('nightwatch-api');

setDefaultTimeout(90000);

BeforeAll(async () => {
  await createSession({env: process.env.env});
});

AfterAll(async () => {
  await closeSession();
});