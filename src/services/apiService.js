const axios = require('axios');

const api = 'http://localhost:3500/api';

export const getBubbles = async () => {
	const bubbles = await axios.get(api + '/bubbles');
    console.log(bubbles);
	return bubbles;
};

export const getBubble = async (id) => {
	const bubble = await axios.get(api + '/bubbles' + '/' + id);
	console.log("Single bubble: ", bubble);
	return bubble;
};

export const getBundles = async () => {
	const bundles = await axios.get(api + '/bundles');
    console.log(bundles);
	return bundles;
};

export const getBundle = async (id) => {
	const bundle = await axios.get(api + '/bundles' + '/' + id);
	console.log("Single bundle: ", bundle);
	return bundle;
}