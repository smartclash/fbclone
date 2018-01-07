const axios = require('axios');
const cache = require('./../../../Utils/node-cache').cache;

const userInfo = token => {
	return new Promise((resolve, reject) => {
		axios.get(cache.get('hasuraAuthApi'), {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token
			}
		}).then(data => {
			return resolve({
				type: 'success',
				message: {
					token: data.data.auth_token,
					username: data.data.username,
					roles: data.data.hasura_roles
				}
			});
		}).catch(err => {
			return reject(err);
		});
	});
};

module.exports = {userInfo};
