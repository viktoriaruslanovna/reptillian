import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import Button from '../../elements/Button.jsx';
import H1 from '../../elements/H1.jsx';
import styles from './comein.module.scss';

function ComeIn({ props }) {
  const [fetchError, setFetchError] = useState();
  const { authenicate, checkAuth } = useActions();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    reset();
    checkAuth();
  }, []);

  const sendForm = handleSubmit(async user => {
    const body = {
      user,
    };

    const error = await props.button.method(props.button.url, body);

    if (error) {
      setFetchError(error);
    } else {
      reset();
      authenicate();
      navigate('/account');
    }
  });

  return (
    <div className={styles.come__in}>
      <H1 props={props.title} />
      <form className={styles.form} action="" onSubmit={sendForm}>
        {props.inputs.map((props, index) => (
          <div key={index++}>
            <input
              placeholder={props.placeholder}
              key={index++}
              {...register(props.name, {
                required: true,
                // minLength: props.validate?.minLength
                //    ? {
                //       value: props.validate.minLength.value,
                //       message: props.validate.minLength.message,
                //     }
                //   : { value: 0 },
              })}
            />
            <div key={index++} className={styles.form__error}>
              {fetchError?.name === props.name && <p>{fetchError.message}</p>}
              {formErrors?.[props.name] && (
                <p>
                  {formErrors?.[props.name].message ||
                    'Необходимо заполнить поле'}
                </p>
              )}
            </div>
          </div>
        ))}

        <div className={styles.phrase__wrapper}>
          <Link to={props.link} className={styles.phrase}>
            {props.phrase}
          </Link>
        </div>

        <Button type="submit" className={styles.btn}>
          {props.button.title}
        </Button>
      </form>
    </div>
  );
}
export default ComeIn;
