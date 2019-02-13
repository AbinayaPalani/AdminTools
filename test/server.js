// import { startWebDriver } from 'nightwatch-api';

// startWebDriver({env: process.env.env}).catch(err => console.log(err));

const {startWebDriver, stopWebDriver} = require('nightwatch-api');

startWebDriver({env: process.env.env}).catch(err => console.log(err));