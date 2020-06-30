import { takeEvery } from 'redux-saga/effects';

import { types } from './types';

function* defaultSaga() {
  yield;
}

function* actionWatcher() {
  yield takeEvery(types.DEFAULT, defaultSaga);
}

export default actionWatcher;
