import { combineReducers } from 'redux';
import bubbles from './bubbleReducer';
import bubble from './singleBubbleReducer';
import bundles from './bundleReducer';
import counter from './CartReducer';
import order from './orderReducer';


export default combineReducers({
    counter,
    bubbles,
    bubble,
    bundles,
    order
});