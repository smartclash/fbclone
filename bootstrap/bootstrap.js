const express = require('express');
const Rollbar = require('rollbar');
const bodyParser = require('body-parser');

const app = express();
const rollbar = new Rollbar('be38b3e730984500a7a6d40c588bfe3f');

app.use(bodyParser.json());
app.use(require('./../routes/web').route);

app.use(rollbar.errorHandler());

rollbar.error('Some kind of weird error that you hate');

module.exports = {app};
