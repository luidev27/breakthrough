import { all } from 'redux-saga/effects';
import { watchAuth } from './auth';
import { watchUser } from './user';
import { watchAccount } from './account';
import { watchPackage } from './package';

export default function* rootSaga() {
  yield all([
    watchAuth(),
    watchUser(),
    watchAccount(),
    watchPackage(),
  ]);
}
