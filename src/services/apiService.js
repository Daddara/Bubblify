const axios = require('axios');

const api = 'http://localhost:3500/api';

export const getBubbles = async () => {
	const bubbles = await axios.get(api + '/bubbles');
	return bubbles;
};

export const getBubble = async (id) => {
	const bubble = await axios.get(api + '/bubbles' + '/' + id);
	return bubble;
};

export const getBundles = async () => {
	const bundles = await axios.get(api + '/bundles');
	return bundles;
};

export const getBundle = async (id) => {
	const bundle = await axios.get(api + '/bundles' + '/' + id);
	return bundle;
}

export const createOrder = async (phoneNumber, order) => {
	await axios.post(api + '/orders/' + phoneNumber, order);
}

export const getOrder = async(phoneNumber) => {
	const order = await axios.get(api + '/orders/' + phoneNumber);
	return order;
}