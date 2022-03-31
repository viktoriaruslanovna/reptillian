import { userStorage } from '../../storage/userStorage';

const initialState = {
  isAuth: userStorage.get() ? true : false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENICATE':
      return { isAuth: true };

    case 'UNAUTHENICATE':
      return {
        isAuth: false,
      };

    case 'CHECK_AUTHENICATE':
      return { isAuth: action.payload };

    default:
      return state;
  }
};
