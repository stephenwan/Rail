import { INC_COUNTER } from '../actions/actionTypes';

export default (state = 0, action) => {
  switch (action.type) {
  case INC_COUNTER:
    return state + 1;
  default:
    return state;
  }
};
