import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) { //if state undefinied, it's set to null
  switch (action.type) {
    case FETCH_WEATHER:
    //  return state.push(action.payload.data); // DONT DO THAT : it manipulates the existing state
      return state.concat([action.payload.data]); // it creates a NEW state, which is ok
      break;
    default:
      break;
  }
  return state;
}
