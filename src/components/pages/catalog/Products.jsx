import styles from './catalog.module.scss';
import { Link } from 'react-router-dom';

function Product({ product, create }) {
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
