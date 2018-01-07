const axios = require('axios');
const cache = require('./../../../Utils/node-cache').cache;

const requestLogin = (username, password) => {
	return new Promise((resolve, reject) => {
		axios
			.post(cache.get('hasuraAuthApi') + 'login', {
				provider: 'username',
				data: {
					username,
					password
				}
			})
			.then(response => resolve({
				type: 'success',
				message: {
					token: response.data.auth_token,
					username: response.data.username
				}
			}))
			.catch(err => reject(err));
	});
};

const requestRegister = (username, password) => {
	return new Promise((resolve, reject) => {
		axios
			.post(cache.get('hasuraAuthApi') + 'signup', {
				provider: 'username',
				data: {
					username,
					password
				}
			})
			.then(response => resolve(response.data))
			.catch(err => reject(err));
	});
};

module.exports = {requestLogin, requestRegister};
