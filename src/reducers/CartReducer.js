
import { INCREMENT, GET_COUNTER, SET_COUNTER} from '../constants';


function counterfunc () {
  if (localStorage.getItem('cart') == null){
    var count = 0;
}
else{
  var prevData = JSON.parse(localStorage.getItem('cart'));
  var count = prevData.length;
}
return count
}


export default function counterReducer(state=counterfunc(), action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case GET_COUNTER:
      return action.payload;
    case SET_COUNTER:
      return action.payload;
    default: return state;
  }
};

