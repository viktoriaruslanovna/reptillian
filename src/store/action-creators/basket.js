import { basketStorage } from '../../storage/basketStorage';

export const createBasketProduct = product => {
  const basketArr = basketStorage.get();

  const idArr = [];
  basketArr.map(elem => {
    idArr.push(elem.id);
  });

  if (idArr.includes(product.id)) {
    alert('Это животное имеется лишь в одном экземпляре');
  } else {
    basketArr.push(product);
    basketStorage.set(basketArr);
    console.log(basketStorage.get());
  }

  return dispatch => {
    dispatch({
      type: 'CREATE',
    });
  };
};

export const removeBasketProduct = product => {
  basketStorage.set(basketStorage.get().filter(e => e.id !== product.id));

  return dispatch => {
    dispatch({
      type: 'REMOVE',
    });
  };
};

// export const checkAuth = () => {
//   return dispatch => {
//     dispatch({
//       type: 'CHECK_AUTHENICATE',
//       payload: userStorage.get() ? true : false,
//     });
//   };
// };
