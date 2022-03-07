import * as apiService from '../services/apiService';
import { GET_BUBBLES } from '../constants';

export const getBubbles = () => async dispatch => {
	try {
        // Await here something from the api
		const bubbles = await apiService.getBubbles();
		dispatch(getBubblesSuccess(bubbles));
	} catch (err) {
		console.log('ERROR IN ACTIONS: ', err);
	}
};

const getBubblesSuccess = bubbles => ({
	type: GET_BUBBLES,
	payload: bubbles,
});