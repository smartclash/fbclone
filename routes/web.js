const express = require('express');

const route = new express.Router();

const AuthController = require('./../app/Http/Controllers/auth-controller');

route.post('/auth/login', AuthController.login);
route.post('/auth/register', AuthController.register);
route.post('/auth/logout', AuthController.logout);

route.get('/', (req, res) => new Error('Aww shit. You broke something'));
route.get('/env', (req, res) => res.send(process.env.SENTRY_DSN));

module.exports = {route};
