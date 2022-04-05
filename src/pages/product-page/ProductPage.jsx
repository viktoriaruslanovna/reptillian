import styles from './productpage.module.scss';
import icon from './media/icon__arrow.svg';
import { products } from '../../data/data';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/elements/Button.jsx';
import H1 from '../../components/elements/H1.jsx';
import { useActions } from '../../hooks/useActions';

function ProductPage() {
  const { createBasketProduct } = useActions();
  const params = useParams();
  const product = products.find(e => e.id == params.id);

  const Box = useRef();
  let number = 1;

  const changeImg = () => {
    Array.from(Box.current.childNodes).map(elem => {
      if (elem.id == number) {
        return (elem.style = 'display:none');
      } else {
        return (elem.style = 'display:block');
      }
    });
  };

  const nextImg = n => {
    if (n === 2) {
      number = 1;
    } else {
      number = n + 1;
    }
    changeImg();
  };

  const prevImg = n => {
    if (n === 1) {
      number = 2;
    } else {
      number = n - 1;
    }
    changeImg();
  };

  return (
    <div className={styles.product__page}>
      <H1 className="white" props="Информация о товаре" />
      <div className={styles.product}>
        <div className={styles.product__slider__box}>
          <Button className={styles.btn} onClick={() => prevImg(number)}>
            <img className={styles.reverse} src={icon} alt="" />
          </Button>
          <div className={styles.img__box} ref={Box}>
            <img id="1" className={styles.img} src={product.img} alt="" />
            <img id="2" className={styles.img} src={product.imgSlide} alt="" />
          </div>
          <Button className={styles.btn} onClick={() => nextImg(number)}>
            <img src={icon} alt="" />
          </Button>
        </div>

        <div className={styles.product__description}>
          <div className={styles.description}>
            <p className={styles.description__name}>{product.name}</p>
            <p className={styles.description__body}>{product.description}</p>
          </div>
          <p
            className={styles.product__price}
            onClick={() => createBasketProduct(product)}
          >
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
