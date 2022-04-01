import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { basketReducer } from './basketReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  length: basketReducer,
});
