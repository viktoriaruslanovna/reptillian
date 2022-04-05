import { userStorage } from '../../storage/userStorage';

export const changeUser = response => {
  userStorage.set(response);
  return dispatch => {
    dispatch({
      type: 'CHANGE__USER',
      payload: response,
    });
  };
};
