import * as authActionCreators from './auth';
import * as basketActionCreators from './basket';

export default {
  ...authActionCreators,
  ...basketActionCreators,
};
