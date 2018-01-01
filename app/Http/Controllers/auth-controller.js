const axios = require('axios');
const cache = require('./../../../Utils/node-cache').cache;

const login = (req, res) => {
	axios.post(cache.get('hasuraAuthApi') + 'login', {
		provider: 'username',
		data: {
			username: req.body.username,
			password: req.body.password
		}
	}).then(response => {
		res.status(200).send({
			type: 'success',
			message: {
				token: response.data.auth_token,
				username: response.data.username
			}
		});
	}).catch(err => {
		if (err.response.data.code === 'invalid-creds') {
			return res.status(401).send({
				type: 'error',
				message: 'Invalid credentials, maybe the account doesn\'t exist'
			});
		}

		return res.send(500).send({
			type: 'error',
			message: 'Unknown error. Please try again later'
		});
	});
};

const register = (req, res) => {
	axios
		.post(cache.get('hasuraAuthApi') + 'signup', {
			provider: 'username',
			data: {
				username: req.body.username,
				password: req.body.password
			}
		})
		.then(response => {
			return res.status(200).send(response.data);
		})
		.catch(err => {
			if (err.response.data.code === 'user-exists') {
				return res.status(401).send({
					type: 'error',
					message: 'The user already exists. Try another username'
				});
			}

			return res.send(500).send({
				type: 'error',
				message: 'Unknown error. Please try again later'
			});
		});
};

const logout = (req, res) => {
	axios
		.post(cache.get('hasuraAuthApi') + 'user/logout', {}, {
			header: {
				Authorization: 'Bearer ' + req.body.token,
				'Content-Type': 'application/json'
			}
		})
		.then(response => {
			return res.status(200).send(response.data);
		})
		.catch(err => {
			if (err.response.data.code === 'unauthorized') {
				return res.status(401).send({
					type: 'error',
					message: 'You are not loggedin to logout'
				});
			}

			return res.send(500).send({
				type: 'error',
				message: 'Unknown error. Please try again later'
			});
		});
};

module.exports = {login, register, logout};
