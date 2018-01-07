const express = require('express');

const route = new express.Router();

const AuthController = require('./../app/Http/Controllers/auth-controller');
const UserController = require('./../app/Http/Controllers/users-controller');

route.post('/auth/login', AuthController.login);
route.post('/auth/register', AuthController.register);

route.get('/user/info', UserController.usersInfo);

module.exports = {route};
