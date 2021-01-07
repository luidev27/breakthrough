/* eslint-disable no-param-reassign */
import produce from 'immer';
import { createAction } from 'redux-actions';

export const actionTypes = {
  getAllPackagesRequest: 'package/get_all_request',
  getPackageByIDRequest: 'package/get_by_id_request',
  packageFail: 'package/fail',
  packageSucceed: 'package/succeed',
  setLoadingStatus: 'package/set_loading_status',
};

export const getAllPackages = createAction(actionTypes.getAllPackagesRequest);
export const getPackageByID = createAction(actionTypes.getPackageByIDRequest);

const defaultState = {
  packages: [],
  package: null,
  isLoading: false,
  error: '',
};

const packageReducer = (state = defaultState, action) => produce(state, (draft) => {
  switch (action.type) {
    case actionTypes.setLoadingStatus:
      draft.isLoading = action.payload;
      break;
    case actionTypes.packageFail:
      draft.error = action.error;
      break;
    case actionTypes.packageSucceed:
      draft.packages = action.packages;
      draft.package = action.package;
      break;
    default:
      break;
  }
});

export default packageReducer;
