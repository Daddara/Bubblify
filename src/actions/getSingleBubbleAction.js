import * as apiService from '../services/apiService';
import { GET_SINGLE_BUBBLE } from '../constants';

export const getBubble = (id) => async dispatch => {
	try {
        // Await here something from the api
		const bubble = await apiService.getBubble(id);
		dispatch(getBubbleSuccess(bubble));
	} catch (err) {
		console.log('ERROR IN ACTIONS: ', err);
	}
};

const getBubbleSuccess = bubble => ({
	type: GET_SINGLE_BUBBLE,
	payload: bubble,
});