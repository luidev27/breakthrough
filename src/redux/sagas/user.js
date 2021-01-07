/* eslint-disable import/prefer-default-export */
import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../reducers/user';
import { getAllUsers, getUserByID } from '../../service/user';

function* getAllUsersSaga() {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    const result = yield call(getAllUsers);
    yield put({ type: actionTypes.setUsers, users: result.data });
  } catch (error) {
    yield put({ type: actionTypes.userFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

function* getUserByIDSaga(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    const { id } = params.payload;
    const result = yield call(getUserByID, { id });
    yield put({ type: actionTypes.setUser, users: result.data });
  } catch (error) {
    yield put({ type: actionTypes.userFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

export function* watchUser() {
  yield takeLatest(actionTypes.getAllUsersRequest, getAllUsersSaga);
  yield takeLatest(actionTypes.getUserByIDRequest, getUserByIDSaga);
}
