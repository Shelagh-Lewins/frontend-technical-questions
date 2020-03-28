import axios from 'axios';
// Assume the api will be extended in future
/* eslint-disable import/prefer-default-export */

// use this to test UI works with simulated server delay
// otherwise loading spinner is not seen
/* function sleeper(ms) {
	return (x) => new Promise(resolve => setTimeout(() => resolve(x), ms));
} */

async function getCardDetails() {
	return axios.get('http://localhost:3001/example')
		// .then(sleeper(2000)).then((response) => response.data)
		.then((response) => response.data)
		.catch((error) => {
			throw error;
		});
}

export { getCardDetails };
