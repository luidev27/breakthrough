/* eslint-disable import/prefer-default-export */
import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../reducers/account';
import { getAccountByID, getAllAccounts } from '../../service/account';

function* accountGetAllSaga(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    const { userId } = params.payload;
    const result = yield call(getAllAccounts, { userId });
    yield put({ type: actionTypes.accountSucceed, account: null, accounts: result.data });
  } catch (error) {
    yield put({ type: actionTypes.accountFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

function* accountGetByID(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    const { id } = params.payload;
    const result = yield call(getAccountByID, { id });
    yield put({ type: actionTypes.accountSucceed, account: result.data, accounts: null });
  } catch (error) {
    yield put({ type: actionTypes.authFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

export function* watchAccount() {
  yield takeLatest(actionTypes.accountGetAllRequest, accountGetAllSaga);
  yield takeLatest(actionTypes.accountGetByIDRequest, accountGetByID);
}
