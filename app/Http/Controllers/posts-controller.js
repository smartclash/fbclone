const createPost = (req, res) => {
	const username = req.params.username
	res.send(username)
}

const editPost = (req, res) => {
	const username = req.params.username
	const id = req.params.id

	res.send({username, id})
}

const deletePost = (req, res) => {
	const username = req.params.username
	const id = req.params.id

	res.send({username, id})
}

module.exports = {createPost, editPost, deletePost}
