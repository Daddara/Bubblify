import * as apiService from '../services/apiService';
import { GET_ORDER } from '../constants';

export const getOrder = (phoneNumber) => async dispatch => {
	try {
        // Await here something from the api
		const order = await apiService.getOrder(phoneNumber);
		dispatch(getOrderSuccess(order));
	} catch (err) {
		console.log('ERROR IN ACTIONS: ', err);
	}
};

const getOrderSuccess = order => ({
	type: GET_ORDER,
	payload: order,
});