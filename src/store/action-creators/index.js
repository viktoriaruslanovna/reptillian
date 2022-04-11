import * as authActionCreators from './auth';
import * as basketActionCreators from './basket';
import * as userActionCreators from './user';
import * as scrollActionCreators from './scroll';

export default {
  ...authActionCreators,
  ...basketActionCreators,
  ...userActionCreators,
  ...scrollActionCreators,
};
