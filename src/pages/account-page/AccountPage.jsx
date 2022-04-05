import { useState } from 'react';
import styles from './accountpage.module.scss';
import userIcon from './media/userIcon.png';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import ChangeForm from '../../components/change-form/ChangeForm';
import H1 from '../../components/elements/H1';

function AccountPage() {
  const [changeItem, setChangeItem] = useState(false);
  const { unauthenicate } = useActions();
  const { user } = useSelector(state => state.user);
  console.log(user);

  const logout = () => {
    unauthenicate();
  };
  return (
    <div className={styles.accountpage}>
      <div className={styles.wrapperleft}>
        <button className={styles.logoutbtn} onClick={logout}>
          Выйти
        </button>
      </div>
      <H1 props={'Личный кабинет'} />
      <div className={styles.info}>
        <img
          className={styles.info__img}
          src={user.image ? user.image : userIcon}
          alt="Ваше фото"
        />
        {changeItem ? (
          <ChangeForm userInfo={user} setChangeItem={setChangeItem} />
        ) : (
          <div>
            <div className={styles.info__wrapper}>
              <p className={styles.info__item}>{user.username}</p>
              <label className={styles.info__label}>Логин</label>
            </div>

            <div className={styles.info__wrapper}>
              <p className={styles.info__item}>{user.email}</p>
              <label className={styles.info__label}>Почта</label>
            </div>
            <div className={styles.info__wrapper}>
              <p className={styles.info__item}>
                {user.bio ? user.bio : 'Не указано'}
              </p>
              <label className={styles.info__label}>Описание</label>
            </div>
            {/* <button
              className={styles.info__btn}
              onClick={() => setChangeItem(true)}
            >
              Изменить
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
}
export default AccountPage;
