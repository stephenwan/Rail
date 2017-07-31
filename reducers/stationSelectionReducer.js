import { START_STATION_SELECTION, DONE_STATION_SELECTION } from '../actions/actionTypes';

export default (state = { departure: null, arrival: null, selecting: null}, action) => {
  switch (action.type) {
  case DONE_STATION_SELECTION:
    if (state.selecting == 'departure') {
      return {
        departure: action.payload || state.departure,
        arrival: state.arrival,
        selecting: null
      };
    } else if (state.selecting == 'arrival') {
      return {
        arrival: action.payload || state.arrival,
        departure: state.departure,
        selecting: null
      };
    } else {
      return {
        selecting: null,
        departure: state.departure,
        arrival: state.arrival
      };
    }
  case START_STATION_SELECTION:
    return {
      selecting: action.payload,
      departure: state.departure,
      arrival: state.arrival
    };
  default:
    return state;
  }
}
