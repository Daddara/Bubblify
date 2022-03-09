import * as apiService from '../services/apiService';
import { GET_BUNDLES } from '../constants';

export const getBundles = () => async dispatch => {
	try {
        // Await here something from the api
		const bundles = await apiService.getBundles();
		dispatch(getBundlesSuccess(bundles));
	} catch (err) {
		console.log('ERROR IN ACTIONS: ', err);
	}
};

const getBundlesSuccess = bundles => ({
	type: GET_BUNDLES,
	payload: bundles,
});