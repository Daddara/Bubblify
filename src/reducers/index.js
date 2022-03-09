import { combineReducers } from 'redux';
import bubbles from './bubbleReducer';
import bubble from './singleBubbleReducer';
import bundles from './bundleReducer';

export default combineReducers({
    bubbles,
    bubble,
    bundles
});