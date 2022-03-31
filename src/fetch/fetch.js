import { userStorage } from '../storage/userStorage';

const baseUrl = 'https://conduit-api-realworld.herokuapp.com/api';

const makeFetch = async (username, email, password, method, url) => {
  let body = {};
  body = {
    user: {
      email: email,
      password: password,
      username: username,
    },
  };

  const result = await method(url, body);
  if ('errors' in result) {
    console.log(result);
    alert('Данные введены неверно');
  } else {
    console.log(result);
    console.log('registered');
    alert('Данные введены верно, страница пользователя будет позже');
    if (result.user) {
      userStorage.set(result.user);
    } else {
      if (result.username) {
        userStorage.set(result);
      }
    }
    console.log(userStorage.get());
  }
};

const fetcher = (method, url, body) => {
  const token = userStorage.get().token;

  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  if (method !== 'GET') {
    config.body = JSON.stringify(body);
  }

  config.headers.Authorization = 'Token ' + token;
  return fetch(baseUrl + url, config).then(async result => {
    result = await result.json();
    console.log(result);
    return result;
  });
};

export const myFetch = {
  get: url => fetcher('GET', url),
  post: (url, body) => fetcher('POST', url, body),
  delete: (url, body) => fetcher('DELETE', url, body),
  put: (url, body) => fetcher('PATCH', url, body),
};

export { makeFetch };
