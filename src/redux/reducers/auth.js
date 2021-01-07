/* eslint-disable no-param-reassign */
import produce from 'immer';
import { createAction } from 'redux-actions';

export const actionTypes = {
  authSignInRequest: 'auth/sign_in_request',
  authSignUpRequest: 'auth/sign_up_request',
  authSignOutRequest: 'auth/sign_out_request',
  authResetPasswordRequest: 'auth/reset_password_request',
  authVerificationRequest: 'auth/verification_request',
  authSelectAccountRequest: 'auth/select_account_request',
  authResendLinkRequest: 'auth/resend_link_request',
  authFail: 'auth/fail',
  setLoadingStatus: 'auth/set_loading_status',
  setAuthData: 'auth/set_auth_data',
  setSignInStep: 'auth/set_sign_in_step',
  setRegisterStep: 'auth/set_register_step',
};

export const authSignIn = createAction(actionTypes.authSignInRequest);
export const authSignUp = createAction(actionTypes.authSignUpRequest);
export const authSignOut = createAction(actionTypes.authSignOutRequest);
export const authResetPassword = createAction(actionTypes.authResetPasswordRequest);
export const authVerification = createAction(actionTypes.authVerificationRequest);
export const authSelectAccount = createAction(actionTypes.authSelectAccountRequest);
export const authResendLink = createAction(actionTypes.authResendLinkRequest);

const defaultState = {
  signInStep: 0,
  registerStep: 0,
  data: null,
  isLoading: false,
  error: '',
};

const authReducer = (state = defaultState, action) => produce(state, (draft) => {
  switch (action.type) {
    case actionTypes.setLoadingStatus:
      draft.isLoading = action.payload;
      break;
    case actionTypes.authFail:
      draft.error = action.error;
      break;
    case actionTypes.setAuthData:
      draft.data = action.data;
      break;
    case actionTypes.setSignInStep:
      draft.signInStep = action.step;
      break;
    case actionTypes.setRegisterStep:
      draft.registerStep = action.step;
      break;
    default:
      break;
  }
});

export default authReducer;
