import { LOAD_STATIONS_COMP, DONE_STATION_SELECTION } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
  case LOAD_STATIONS_COMP:
    return action.payload;
  case DONE_STATION_SELECTION:
    return [];
  default:
    return state;
  }
};
