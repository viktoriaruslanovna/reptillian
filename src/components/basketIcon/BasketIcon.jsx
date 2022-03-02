import styles from './basketIcon.module.scss';
import icon from './media/basket.svg';
import { Link } from 'react-router-dom';

function BasketIcon({ length }) {
  return (
    <div className={styles.icon}>
      <div className={styles.wrapper}>
        <Link to={'/basket'}>
          <img href="/basket" className={styles.icon__svg} src={icon} alt="" />
        </Link>
        <p className={styles.icon__number}>{length}</p>
      </div>
    </div>
  );
}
export default BasketIcon;
