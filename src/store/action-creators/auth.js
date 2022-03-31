import { userStorage } from '../../storage/userStorage';

export const authenicate = () => {
  return dispatch => {
    dispatch({
      type: 'AUTHENICATE',
    });
  };
};

export const unauthenicate = () => {
  return dispatch => {
    dispatch({
      type: 'UNAUTHENICATE',
    });
    userStorage.set('');
  };
};

export const checkAuth = () => {
  return dispatch => {
    dispatch({
      type: 'CHECK_AUTHENICATE',
      payload: userStorage.get() ? true : false,
    });
  };
};
