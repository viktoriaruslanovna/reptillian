import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { basketReducer } from './basketReducer';
import { userReducer } from './userReducer';
import { scrollReducer } from './scrollReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  length: basketReducer,
  user: userReducer,
  scroll: scrollReducer,
});
