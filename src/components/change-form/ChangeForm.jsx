import styles from '../../pages/account-page/accountpage.module.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { myFetch } from '../../fetch/index';

function ChangeForm({ userInfo, setChangeItem }) {
  const [fetchError, setFetchError] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const changeUser = handleSubmit(async user => {
    user.image = userInfo.image;
    user.token = userInfo.token;

    // console.log(user);
    const body = {
      user,
    };

    const result = await myFetch.patch('/user', body, userInfo.token);

    if (typeof result === 'string') {
      setFetchError(result);
    } else {
      console.log('right');
      changeUser(result);
      reset();
      setChangeItem(false);
    }
  });

  return (
    <form className="" onSubmit={changeUser}>
      <div className={styles.info__wrapper}>
        <input
          className={
            errors?.username
              ? styles.info__item + ' ' + styles.error
              : styles.info__item
          }
          type="text"
          {...register('username', {
            required: true,
            value: userInfo.username,
            maxLength: 20,
          })}
        />
      </div>
      <div className={styles.info__wrapper}>
        <input
          className={
            errors?.email
              ? styles.info__item + ' ' + styles.error
              : styles.info__item
          }
          type="text"
          {...register('email', {
            required: true,
            value: userInfo.email,
            maxLength: 20,
          })}
        />
      </div>
      <div className={styles.info__wrapper}>
        <input
          className={
            errors?.bio
              ? styles.info__item + ' ' + styles.error
              : styles.info__item
          }
          type="text"
          {...register('bio', {
            required: false,
            value: userInfo.bio,
            maxLength: 1000,
          })}
        />
      </div>
      <button className={styles.info__btn} type="submit">
        Сохранить
      </button>
    </form>
  );
}

export default ChangeForm;
