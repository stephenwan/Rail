import React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
import HelloViewContainer from './containers/HelloViewContainer';
import StationListContainer from './containers/StationListContainer';

const store = createStore();

export default () => (
  <Provider store={store}>
    <StationListContainer/>
  </Provider>
);
