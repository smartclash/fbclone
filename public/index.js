const app = require('./../bootstrap/bootstrap').app

const port = process.env.PORT || 8080

app.listen(port, () => {
	console.log('Started listening on port', port)
})
