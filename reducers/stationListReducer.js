import { LOAD_STATIONS_COMP } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
  case LOAD_STATIONS_COMP:
    return action.payload;
  default:
    return state;
  }
};
