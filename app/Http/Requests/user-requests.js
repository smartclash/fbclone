const axios = require('axios')

const userInfo = token => {
	return new Promise((resolve, reject) => {
		axios.get(String(process.env.HASURA_AUTH) + 'user/info', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token
			}
		}).then(data => {
			return resolve({
				type: 'success',
				message: {
					id: data.data.hasura_id,
					token: data.data.auth_token,
					username: data.data.email,
					roles: data.data.hasura_roles
				}
			})
		}).catch(err => {
			return reject(err)
		})
	})
}

module.exports = {userInfo}
