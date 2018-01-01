const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(require('./../routes/web').route);

module.exports = {app};
