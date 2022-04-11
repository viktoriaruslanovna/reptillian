import HeaderItem from './HeaderItem.jsx';
import styles from './header.module.scss';
import logo from './media/logo.svg';
import burger from './media/burger.png';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions.js';
import { useSelector } from 'react-redux';

function HeaderList({ menu }) {
  const { scroll } = useSelector(state => state.scroll);
  const { scrollLock, scrollAllow } = useActions();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/home">
          <div className={styles.logo}>
            <img className={styles.header__icon} src={logo} alt="" />
          </div>
        </Link>
        <div
          className={styles.burger}
          onClick={() => (scroll ? scrollLock() : scrollAllow())}
        >
          <img className={styles.header__icon} src={burger} alt="" />
        </div>
        <div
          className={[styles.header__box, !scroll && styles._active].join(' ')}
        >
          {menu.map(menu => (
            <HeaderItem menu={menu} key={menu.id} />
          ))}
        </div>
      </div>
    </header>
  );
}
export default HeaderList;
