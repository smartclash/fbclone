const authRequestHandler = require('./../Requests/auth-requests')

const login = (req, res) => {
	authRequestHandler
		.requestLogin(req.body.username, req.body.password)
		.then(response => res.status(200).send(response))
		.catch(err => res.status(401).send({
			type: 'error',
			message: 'Invalid credentials. Try again',
			code: err.response.data.code
		}))
}

const register = (req, res) => {
	authRequestHandler
		.requestRegister(req.body.username, req.body.password)
		.then(response => console.log(response))
		.catch(err => {
			if (err.response.data.code === 'user-exists') {
				return res.status(401).send({
					type: 'error',
					message: 'The user already exists. Try another username'
				})
			}

			console.log(err.response)
			res.status(500).send({
				type: 'error',
				message: 'Unknown error. Please try again later'
			})
		})
}

module.exports = {login, register}
