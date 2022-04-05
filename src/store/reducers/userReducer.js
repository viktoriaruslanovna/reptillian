import { userStorage } from '../../storage/userStorage';

const initialState = {
  user: userStorage.get(),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE__USER':
      return { user: action.payload };

    default:
      return state;
  }
};
