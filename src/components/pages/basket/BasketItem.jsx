import { Link } from 'react-router-dom';
import styles from './basket.module.scss';
import Delete from './media/delete.svg';
import Button from '../../elements/Button.jsx';
import { useActions } from '../../../hooks/useActions';

function BasketItem({ basket }) {
  const { removeBasketProduct } = useActions();

  console.log('work');
  console.log(basket);
  const remove = product => {
    removeBasketProduct(product);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.product}>
        <Link to={'/productpage/' + basket.id}>
          <div className={styles.product__wrapper__img__name}>
            <img className={styles.img} src={basket.img} alt="basket" />
            <p className={styles.name}>{basket.name}</p>
          </div>
        </Link>
        <p className={styles.price}>{basket.price}</p>

        <Button className={styles.btn} onClick={() => remove(basket)}>
          <img src={Delete} alt="" />
        </Button>
      </div>
    </div>
  );
}
export default BasketItem;
