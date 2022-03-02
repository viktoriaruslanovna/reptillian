import HeaderItem from './HeaderItem.jsx';
import styles from './header.module.scss';
import logo from './media/logo.svg';
import burger from './media/burger.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function HeaderList({ menu }) {
  const [active, setActive] = useState(0);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/home">
          <div className={styles.logo}>
            <img className={styles.header__icon} src={logo} alt="" />
          </div>
        </Link>
        <div className={styles.burger} onClick={() => setActive(!active)}>
          <img className={styles.header__icon} src={burger} alt="" />
        </div>
        <div
          className={[
            styles.header__box,
            active ? styles._active : console.log(),
          ].join(' ')}
        >
          {menu.map(menu => (
            <HeaderItem setActive={setActive} menu={menu} key={menu.id} />
          ))}
        </div>
      </div>
    </header>
  );
}
export default HeaderList;
