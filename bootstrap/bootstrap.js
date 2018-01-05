const express = require('express');
const raven = require('raven');
const bodyParser = require('body-parser');

const app = express();

raven.config('https://66d9e1dd671b4e139bb7932772fafc4f@sentry.io/267471').install();

app.use(raven.requestHandler());
app.use(raven.errorHandler());
app.use(bodyParser.json());
app.use(require('./../routes/web').route);

module.exports = {app};
