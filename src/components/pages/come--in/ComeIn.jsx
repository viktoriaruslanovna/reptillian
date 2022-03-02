import { useState, useEffect, useContext } from 'react';
import styles from './comein.module.scss';
import { makeFetch } from '../../../fetch/fetch';
import { AuthContext } from '../../../context/index';
import { userStorage } from '../../../storage/userStorage';
import H1 from '../../elements/H1.jsx';
import Button from '../../elements/Button.jsx';
import Input from '../../elements/Input.jsx';
import { Link } from 'react-router-dom';

function ComeIn({ props }) {
  const { auth, setAuth } = useContext(AuthContext);
  const [change, setChange] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    userStorage.get() ? setAuth(true) : setAuth(false);
    console.log(auth);
  }, [change]);

  const makeInputControlled = () => {
    props.inputs.forEach(e => {
      if (e.name === 'email') {
        e.handler = setEmail;
        e.value = email;
      }
      if (e.name === 'username') {
        e.handler = setUsername;
        e.value = username;
      }
      if (e.name === 'password') {
        e.handler = setPassword;
        e.value = password;
      }
    });
  };
  makeInputControlled();

  const sendForm = async e => {
    e.preventDefault();
    await makeFetch(
      username,
      email,
      password,
      props.button.method,
      props.button.url,
    );
    // setChange(change + 1);
  };

  const logout = () => {
    userStorage.set('');
    setChange(change + 1);
  };

  return (
    <div className={styles.come__in}>
      <H1 props={props.title} />
      <form className={styles.form} action="" onSubmit={sendForm}>
        {props.inputs.map((props, index) => (
          <Input
            placeholder={props.placeholder}
            name={props.name}
            key={index++}
            value={props.value}
            onChange={e => props.handler(e.target.value)}
          />
        ))}
        <div className={styles.phrase__wrapper}>
          <Link to={props.link} className={styles.phrase}>
            {' '}
            {props.phrase}{' '}
          </Link>
        </div>

        <Button className={styles.btn}> {props.button.title} </Button>
      </form>
    </div>
  );
}
export default ComeIn;
