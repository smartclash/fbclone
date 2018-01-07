const express = require('express');
const bearerToken = require('express-bearer-token');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bearerToken());
app.use(require('./../routes/web').route);

module.exports = {app};
