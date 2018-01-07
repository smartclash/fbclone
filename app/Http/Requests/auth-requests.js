const axios = require('axios');

const requestLogin = (username, password) => {
	return new Promise((resolve, reject) => {
		axios
			.post(String(process.env.HASURA_AUTH) + 'login', {
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
			.post(String(process.env.HASURA_AUTH) + 'signup', {
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
