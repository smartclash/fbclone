const express = require('express');

const route = new express.Router();

const AuthController = require('./../app/Http/Controllers/auth-controller');
const UserController = require('./../app/Http/Controllers/users-controller');
const PostController = require('./../app/Http/Controllers/posts-controller');

route.post('/auth/login', AuthController.login);
route.post('/auth/register', AuthController.register);

route.get('/:username/info', UserController.usersInfo);
route.post('/:username/posts/create', PostController.createPost);
route.post('/:username/posts/edit/:id', PostController.editPost);
route.post('/:username/posts/delete/:id', PostController.deletePost);

module.exports = {route};
