import { combineReducers } from 'redux';
import accountReducer from './account';
import packageReducer from './package';
import authReducer from './auth';
import userReducer from './user';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  account: accountReducer,
  package: packageReducer,
});

export default rootReducer;
