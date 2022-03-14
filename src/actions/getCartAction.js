
import { INCREMENT,GET_COUNTER, SET_COUNTER } from "../constants";

export const incrementCounter = number => {
  return {
    type: INCREMENT,
    payload: number
  }
};

export const getCounter = () => {
  return{
    type: GET_COUNTER
  }
}


export const setCounter = num => {
  return{
    type: SET_COUNTER,
    payload: num
  }
}