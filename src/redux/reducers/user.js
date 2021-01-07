/* eslint-disable no-param-reassign */
import produce from 'immer';
import { createAction } from 'redux-actions';

export const actionTypes = {
  getAllUsersRequest: 'user/get_all_users_request',
  getUserByIDRequest: 'user/get_user_by_id_request',
  userFail: 'user/fail',
  setLoadingStatus: 'user/set_loading_status',
  setUsers: 'user/set_users',
  setUser: 'user/set_user',
};

export const getAllUsers = createAction(actionTypes.getAllUsersRequest);
export const getUserByID = createAction(actionTypes.getUserByIDRequest);

const defaultState = {
  isLoading: false,
  users: [],
  user: null,
  error: '',
};

const userReducer = (state = defaultState, action) => produce(state, (draft) => {
  switch (action.type) {
    case actionTypes.setLoadingStatus:
      draft.isLoading = action.payload;
      break;
    case actionTypes.setUsers:
      draft.users = action.users;
      break;
    case actionTypes.setUser:
      draft.user = action.user;
      break;
    case actionTypes.userFail:
      draft.error = action.error;
      break;
    default:
      break;
  }
});

export default userReducer;
