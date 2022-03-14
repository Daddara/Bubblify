
import { INCREMENT, GET_COUNTER, SET_COUNTER} from '../constants';


function counterfunc () {
  if (localStorage.getItem('cart') == null){
    var count = 0;
}
else{
  var prevData = JSON.parse(localStorage.getItem('cart'));
  var count = 0;
  for(let i = 0; i < prevData.length; i++){
    console.log(prevData[i]);
    if(prevData[i].hasOwnProperty('bubble')){
      count += prevData[i].bubble.counter;
    }
    else{
      count += prevData[i].bundle.counter;
    }
    
  }
  // var count = prevData.length;
}
return count;
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

