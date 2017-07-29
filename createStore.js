import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import helloReducer from './reducers/helloReducer';
import stationListReducer from './reducers/stationListReducer';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      count: helloReducer,
      stations: stationListReducer
    }),
    { count: 0 },
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);
  return store;

};
