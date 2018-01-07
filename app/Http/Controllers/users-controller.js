const userRequests = require('./../Requests/user-requests');

const usersInfo = (req, res) => {
	userRequests.userInfo(req.token)
		.then(response => res.status(200).send(response))
		.catch(err => {
			let error;
			if (err.response.data.code === 'unauthorized') {
				error = {
					type: 'error',
					message: 'You are not authenticated'
				};
			} else if (err.response.data.message === 'invalid authorization token') {
				error = {
					type: 'error',
					message: 'The token is invalid'
				};
			} else {
				error = {
					type: 'error',
					message: 'Unknown error occured. Contact the developer'
				};
			}

			res.status(401).send(error);
		});
};

module.exports = {usersInfo};
