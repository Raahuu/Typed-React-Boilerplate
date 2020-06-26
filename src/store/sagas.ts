import { all } from 'redux-saga/effects';
import defaultSaga from './App/saga';

export default function* rootSaga() {
  yield all([defaultSaga()]);
}
