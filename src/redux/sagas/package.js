/* eslint-disable import/prefer-default-export */
import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../reducers/package';
import { getAllPackages, getPackageByID } from '../../service/package';

function* getAllPackagesSaga() {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    const result = yield call(getAllPackages);
    const packages = result.data.filter((pkg) => pkg.price !== null && pkg.price !== undefined);
    packages.sort((a, b) => Number(a.price) - Number(b.price));
    yield put({ type: actionTypes.packageSucceed, package: null, packages });
  } catch (error) {
    yield put({ type: actionTypes.packageFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

function* getPackageByIDSaga(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    const { id } = params.payload;
    const result = yield call(getPackageByID, { id });
    yield put({ type: actionTypes.packageSucceed, package: result.data, packages: null });
  } catch (error) {
    yield put({ type: actionTypes.packageFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

export function* watchPackage() {
  yield takeLatest(actionTypes.getAllPackagesRequest, getAllPackagesSaga);
  yield takeLatest(actionTypes.getPackageByIDRequest, getPackageByIDSaga);
}
