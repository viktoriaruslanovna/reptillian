import { Link } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import styles from './catalog.module.scss';

function Product({ product }) {
  const { createBasketProduct } = useActions();

  const create = product => {
    createBasketProduct(product);
  };
  // const createBasketProduct = product => {
  //   const basketArr = basketStorage.get();

  //   const idArr = [];
  //   basketArr.map(elem => {
  //     idArr.push(elem.id);
  //   });

  //   if (idArr.includes(product.id)) {
  //     alert('Это животное имеется лишь в одном экземпляре');
  //   } else {
  //     basketArr.push(product);
  //     basketStorage.set(basketArr);
  //     // setLengthBasket(basketStorage.get().length);
  //   }
  // };

  return (
    <div className={styles.product}>
      <Link to={'/productpage/' + product.id}>
        <div className={styles.product__img}>
          <img className={styles.img} src={product.img} alt="none" />
        </div>
        <div className={styles.product__name}>
          <p className={styles.product__name__title}>{product.name}</p>
        </div>
      </Link>
      <div className={styles.product__price}>
        <p
          onClick={() => create(product)}
          className={styles.product__price__title}
        >
          {product.price}
        </p>
      </div>
    </div>
  );
}
export default Product;
