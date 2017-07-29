import { INC_COUNTER,
         INC_COUNTER_DELAYED,
         LOAD_STATIONS,
         LOAD_STATIONS_COMP
       } from './actionTypes';


export const incCounter = () => ({
  type: INC_COUNTER,
  payload: undefined
});


export const incCounterDelayed = () => ({
  type: INC_COUNTER_DELAYED,
  payload: undefined
});


export const loadStations = (token) => ({
  type: LOAD_STATIONS,
  payload: token
});


export const loadStationsCompleted = (stations) => ({
  type: LOAD_STATIONS_COMP,
  payload: stations
});
