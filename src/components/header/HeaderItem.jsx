import styles from './header.module.scss';
import { Link } from 'react-router-dom';

function Header({ setActive, menu }) {
  return (
    <Link
      to={menu.url}
      className={styles.header__box__title}
      onClick={() => setActive(0)}
    >
      {menu.title}
    </Link>
  );
}
export default Header;
