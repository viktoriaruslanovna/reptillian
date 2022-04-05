import { useSelector } from 'react-redux';
import styles from './basket.module.scss';
import BasketItem from './BasketItem.jsx';

function BasketPage({}) {
  const { length, basketArr } = useSelector(state => state.length);
  console.log(length);

  return (
    <div className={styles.basket__page}>
      {length ? (
        <div className={styles.basket__list}>
          {basketArr.map((basket, index) => (
            <BasketItem basket={basket} key={index++} />
          ))}
        </div>
      ) : (
        <h1 className="white">Корзина пуста</h1>
      )}
    </div>
  );
}

export default BasketPage;
