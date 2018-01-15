const axios = require('axios')

const requestLogin = (email, password) => {
	return new Promise((resolve, reject) => {
		axios
			.post(String(process.env.HASURA_AUTH) + 'login', {
				provider: 'email',
				data: {
					email,
					password
				}
			})
			.then(response => resolve({
				type: 'success',
				message: {
					token: response.data.auth_token,
					email: response.data.email
				}
			}))
			.catch(err => reject(err))
	})
}

const requestRegister = (email, password) => {
	return new Promise((resolve, reject) => {
		axios
			.post(String(process.env.HASURA_AUTH) + 'signup', {
				provider: 'email',
				data: {
					email,
					password
				}
			})
			.then(response => resolve(response.data))
			.catch(err => reject(err))
	})
}

module.exports = {requestLogin, requestRegister}
