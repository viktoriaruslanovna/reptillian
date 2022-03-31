import { userStorage } from '../storage/userStorage';

const baseUrl = 'https://conduit-api-realworld.herokuapp.com/api';

export const myFetch = {
  get: url => fetcher('GET', url),
  post: (url, body) => fetcher('POST', url, body),
  delete: (url, body) => fetcher('DELETE', url, body),
  put: (url, body) => fetcher('PATCH', url, body),
};

export const fetcher = async (method, url, body) => {
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
      console.log(response);

    case 'PATCH':
    // response = await fetch(baseUrl + url, config);
    // response = await response.json();
  }

  if (response.errors) {
    return makeError(response.errors.body[1]);
  } else {
    userStorage.set(response);
  }
};

const makeError = error => {
  console.log(error);
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
  }
};
