import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';

function Header({ menu }) {
  const { scrollAllow } = useActions();

  return (
    <Link
      to={menu.url}
      className={styles.header__box__title}
      onClick={scrollAllow}
    >
      {menu.title}
    </Link>
  );
}
export default Header;
