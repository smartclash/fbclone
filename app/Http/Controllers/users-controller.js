const userRequests = require('./../Requests/user-requests');

const usersInfo = (req, res) => {
	userRequests.userInfo(req.token)
		.then(response => res.status(200).send(response))
		.catch(err => res.status(401).send({
			type: 'error',
			message: 'You are either not logged in or an error occured',
			code: err.response
		}));
};

module.exports = {usersInfo};
