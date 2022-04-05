import { userStorage } from '../../storage/userStorage';
import { changeUser } from '../../store/action-creators/user';

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
    changeUser('');
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
