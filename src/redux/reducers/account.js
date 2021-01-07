/* eslint-disable no-param-reassign */
import produce from 'immer';
import { createAction } from 'redux-actions';

export const actionTypes = {
  accountGetAllRequest: 'account/get_all_request',
  accountGetByIDRequest: 'account/get_by_id_request',
  accountSucceed: 'account/succeed',
  accountFail: 'account/fail',
  setLoadingStatus: 'account/set_loading_status',
};

export const accountGetAll = createAction(actionTypes.accountGetAllRequest);
export const accountGetByID = createAction(actionTypes.accountGetByIDRequest);

const defaultState = {
  isLoading: false,
  accounts: [],
  account: null,
  error: '',
};

const accountReducer = (state = defaultState, action) => produce(state, (draft) => {
  switch (action.type) {
    case actionTypes.setLoadingStatus:
      draft.isLoading = action.payload;
      break;
    case actionTypes.accountSucceed:
      draft.account = action.account;
      draft.accounts = action.accounts;
      break;
    case actionTypes.accountFail:
      draft.error = action.error;
      break;
    default:
      break;
  }
});

export default accountReducer;
