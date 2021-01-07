/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { call, put, takeLatest } from 'redux-saga/effects';
import cookies from 'js-cookie';
import { actionTypes } from '../reducers/auth';
import {
  login, logout, register, selectAccount, resendEmailVerification,
} from '../../service/auth';

function* authSignInSaga(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    const { email, password } = params.payload;
    const result = yield call(login, { email, password });
    if (result.data && result.data.access_token) {
      yield put({ type: actionTypes.setAuthData, data: result.data });
      yield put({ type: actionTypes.setSignInStep, step: 1 });
    }
  } catch (error) {
    yield put({ type: actionTypes.authFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

function* authSignUpSaga(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    const {
      email, password, password_confirmation,
    } = params.payload;
    yield call(register, {
      email, password, password_confirmation,
    });
    yield put({ type: actionTypes.setRegisterStep, step: 1 });
  } catch (error) {
    yield put({ type: actionTypes.authFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

function* authSignOutSaga() {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    yield put({ type: actionTypes.setSignInStep, step: 0 });
    yield put({ type: actionTypes.setRegisterStep, step: 0 });
    yield call(logout);
    window.location.pathname = '/signin';
  } catch (error) {
    yield put({ type: actionTypes.authFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

function* authSelectAccountSaga(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    const { token, account, profile } = params.payload;
    yield call(selectAccount, { account_id: account.account_id, token });
    cookies.set('_bt_token', token);
    cookies.set('_bt_profile', profile);
    cookies.set('_bt_account', account);
    yield put({ type: actionTypes.setSignInStep, step: 2 });
  } catch (error) {
    yield put({ type: actionTypes.authFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

function* authResendLinkSaga(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    const { email } = params.payload;
    yield call(resendEmailVerification, { email });
  } catch (error) {
    yield put({ type: actionTypes.authFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

function* authResetPasswordSaga() {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    // Reset Password
  } catch (error) {
    yield put({ type: actionTypes.authFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

function* authVerificationSaga() {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    // Verification
  } catch (error) {
    yield put({ type: actionTypes.authFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

export function* watchAuth() {
  yield takeLatest(actionTypes.authSignInRequest, authSignInSaga);
  yield takeLatest(actionTypes.authSignUpRequest, authSignUpSaga);
  yield takeLatest(actionTypes.authSignOutRequest, authSignOutSaga);
  yield takeLatest(actionTypes.authSelectAccountRequest, authSelectAccountSaga);
  yield takeLatest(actionTypes.authResendLinkRequest, authResendLinkSaga);
  yield takeLatest(actionTypes.authResetPasswordRequest, authResetPasswordSaga);
  yield takeLatest(actionTypes.authVerificationRequest, authVerificationSaga);
}
