import { delay } from 'redux-saga';
import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects';
import { incCounter, loadStationsCompleted } from '../actions/actionCreators';
import * as actionTypes from '../actions/actionTypes';


function* incCounterDelayed() {
  yield delay(2000);
  yield put(incCounter());
}

function* watchIncCounterDelayed() {
  yield takeEvery(actionTypes.INC_COUNTER_DELAYED, incCounterDelayed);
}

function* loadStationsDelayed() {
  yield takeLatest(actionTypes.LOAD_STATIONS, function* (action) {
    console.log('load station with token: ', action.payload);
    const resp = yield fetch(`https://gateway.skyscanner.net/rail/v1/UK/en-GB/suggestions?q=${action.payload}`);
    const stations = yield resp.json();
    console.log('resp is ', stations);
    yield put(loadStationsCompleted(stations));
  });
}

export default function* rootSaga() {
  yield all([
    watchIncCounterDelayed(),
    loadStationsDelayed()
  ]);
}
