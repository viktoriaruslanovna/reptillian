import { changeUser } from '../store/action-creators/user';

const baseUrl = 'https://conduit-api-realworld.herokuapp.com/api';

export const myFetch = {
  get: url => fetcher('GET', url),
  post: (url, body) => fetcher('POST', url, body),
  delete: (url, body) => fetcher('DELETE', url, body),
  patch: (url, body, token) => fetcher('PATCH', url, body, token),
};

export const fetcher = async (method, url, body, token = '') => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  config.body = JSON.stringify(body);

  let response;
  switch (method) {
    case 'POST':
      response = await fetch(baseUrl + url, config);
      response = await response.json();

    case 'PATCH':
      config.headers.Authorization = 'Token ' + token;
      response = await fetch(baseUrl + url, config);
      response = await response.json();
      console.log(response);

    // default:
    //   response = {
    //     errors: {
    //       body: ['', 'Нет такого метода'],
    //     },
    //   };
  }

  if (response.errors) {
    return makeError(response.errors.body[1]);
  } else {
    return response.user;
  }
};

const makeError = error => {
  let correctError;
  switch (error) {
    case 'No User with this email id':
      return (correctError = {
        name: 'email',
        message: 'Неверно введена почта',
      });

    case 'Invalid password or email id':
      return (correctError = {
        name: 'password',
        message: 'Неверно введен пароль',
      });

    case 'User aldready exists with this email id':
      return (correctError = {
        name: 'email',
        message: 'Пользователь с такой почтой уже существует',
      });

    case 'Validation error':
      return (correctError = {
        name: 'username',
        message: 'Пользователь с таким логином уже существует',
      });

    default:
      return (correctError = {
        name: '',
        message: error,
      });
  }
};
