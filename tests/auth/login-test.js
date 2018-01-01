import test from 'ava';
import http from 'ava-http';

const cache = require('./../../Utils/node-cache').cache;

test('User should login perfectly', t => {
	const response = http.post(cache.get('hasuraAuthApi') + 'login', {
		username: 'alphaman',
		password: 'passwordthatisstrong'
	}).then(data => {
		console.log(response);
		t.deepEqual(data.username, 'alphaman');
		t.pass();
	}).catch(err => {
		console.log(err);
		t.fail(err);
	});
});
