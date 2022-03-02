import { useState } from 'react';
import styles from './basket.module.scss';
import BasketItem from './BasketItem.jsx';
import Button from '../../elements/Button';

function BasketPage({ basketStorage, setLengthBasket }) {
  const [arrBasket, setArrBasket] = useState(basketStorage.get());

  const removeBasketProduct = basketProduct => {
    basketStorage.set(
      basketStorage.get().filter(e => e.id !== basketProduct.id),
    );
    setArrBasket(arrBasket.filter(e => e.id !== basketProduct.id));
    setLengthBasket(basketStorage.get().length);
  };

  return (
    <div className={styles.basket__page}>
      {arrBasket.length ? (
        <div className={styles.basket__list}>
          {arrBasket.map((basket, index) => (
            <BasketItem
              remove={removeBasketProduct}
              basket={basket}
              key={index++}
            />
          ))}
        </div>
      ) : (
        <h1 className="white">Корзина пуста</h1>
      )}
      ;<Button>Оформить заказ</Button>
    </div>
  );
}

export default BasketPage;
