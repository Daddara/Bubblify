const axios = require('axios');

const api = 'http://localhost:3500/api';

export const getBubbles = async () => {
	const bubbles = await axios.get(api + '/bubbles');
   
	return bubbles;
};