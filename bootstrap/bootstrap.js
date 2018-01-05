const express = require('express');
const raven = require('raven');
const bodyParser = require('body-parser');

const app = express();

raven.config('__DSN__').install();

app.use(raven.requestHandler());
app.use(raven.errorHandler());
app.use(bodyParser.json());
app.use(require('./../routes/web').route);

module.exports = {app};
