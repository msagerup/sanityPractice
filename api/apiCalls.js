import client from './client.js';

const functions = {}

functions.createUser = (firstName, lastName, username) => {
	console.log('running, sanity')
	return client.create({
		_type: 'user',
		first_name: firstName,
		last_name: lastName,
		username,
		created_at: new Date()
	})
}

export default functions