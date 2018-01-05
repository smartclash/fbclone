const express = require('express');

const route = new express.Router();

const AuthController = require('./../app/Http/Controllers/auth-controller');

route.post('/auth/login', AuthController.login);
route.post('/auth/register', AuthController.register);
route.post('/auth/logout', AuthController.logout);

module.exports = {route};
