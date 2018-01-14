const express = require('express')
const bearerToken = require('express-bearer-token')

const app = express()

app.use(express.json())
app.use(bearerToken())
app.use(require('./../routes/web').route)

module.exports = {app}
