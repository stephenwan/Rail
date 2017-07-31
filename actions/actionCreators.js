import { INC_COUNTER,
         INC_COUNTER_DELAYED,
         LOAD_STATIONS,
         LOAD_STATIONS_COMP,
         START_STATION_SELECTION,
         DONE_STATION_SELECTION
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


export const startStationSelection = (mode) => ({
  type: START_STATION_SELECTION,
  payload: mode
});


export const doneStationSelection = (station) => ({
  type: DONE_STATION_SELECTION,
  payload: station
});
