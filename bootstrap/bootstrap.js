const express = require('express');
const bearerToken = require('express-bearer-token');
const Rollbar = require('rollbar');
const bodyParser = require('body-parser');

const app = express();
const rollbar = new Rollbar(process.env.ROLLBAR_KEY);

app.use(bodyParser.json());
app.use(bearerToken());
app.use(require('./../routes/web').route);

app.use(rollbar.errorHandler());

module.exports = {app};
