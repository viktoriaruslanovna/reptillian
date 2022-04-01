import { basketStorage } from '../../storage/basketStorage';

const initialState = {
  length: basketStorage.get().length,
  basketArr: basketStorage.get(),
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE':
      return {
        length: basketStorage.get().length,
        basketArr: basketStorage.get(),
      };

    case 'REMOVE':
      return {
        length: basketStorage.get().length,
        basketArr: basketStorage.get(),
      };

    default:
      return state;
  }
};
