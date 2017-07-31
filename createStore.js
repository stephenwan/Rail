import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import helloReducer from './reducers/helloReducer';
import stationListReducer from './reducers/stationListReducer';
import stationSelectionReducer from './reducers/stationSelectionReducer';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      count: helloReducer,
      stations: stationListReducer,
      stationSelection: stationSelectionReducer
    }),
    { count: 0, stationSelection: { departure: null, arrival: null, selecting: null} },
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);
  return store;

};
