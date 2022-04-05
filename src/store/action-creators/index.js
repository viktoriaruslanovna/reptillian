import * as authActionCreators from './auth';
import * as basketActionCreators from './basket';
import * as userActionCreators from './user';

export default {
  ...authActionCreators,
  ...basketActionCreators,
  ...userActionCreators,
};
