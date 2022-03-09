import { myFetch } from '../fetch/fetch';

export const products = [
  {
    id: 1,
    name: 'Эублефар',
    price: '10 000',
    img: './products_media/product_eublefar_1.jpg',
    imgSlide: './products_media/product_eublefar_8.jpg',
    description: 'Цвет зеленый',
  },
  {
    id: 2,
    name: 'Эублефар бенгальский',
    price: '10 000',
    img: './products_media/product_eublefar_8.jpg',
    imgSlide: './products_media/product_eublefar_1.jpg',
    description: 'Цвет красный',
  },
  {
    id: 3,
    name: 'Эублефар древесный',
    price: '100 000',
    img: './products_media/product_eublefar_3.jpg',
    imgSlide: './products_media/product_eublefar_1.jpg',
    description: 'Цвет зеленый',
  },
  {
    id: 4,
    name: 'Эублефар',
    price: '100 000',
    img: './products_media/product_eublefar_4.jpg',
    imgSlide: './products_media/product_eublefar_1.jpg',

    description: 'Цвет красный',
  },
  {
    id: 5,
    name: 'Эублефар',
    price: '10 000',
    img: './products_media/product_eublefar_9.jpg',
    imgSlide: './products_media/product_eublefar_1.jpg',
    description: 'Цвет зеленый',
  },
  {
    id: 6,
    name: 'Эублефар дневной мадагаскарский',
    price: '10 000',
    img: './products_media/product_eublefar_6.jpg',
    imgSlide: './products_media/product_eublefar_1.jpg',
    description: 'Цвет красный',
  },
];

export const pages = {
  logIn: {
    title: 'Войти в аккаунт',
    inputs: [
      { placeholder: 'Введите почту', name: 'email' },
      { placeholder: 'Введите пароль', name: 'password' },
    ],
    button: { title: 'Вход', method: myFetch.post, url: '/users/login' },
    phrase: 'Регистрация',
    link: '/signup',
  },
  signUp: {
    title: 'Регистрация',
    inputs: [
      { placeholder: 'Введите почту', name: 'email' },
      { placeholder: 'Введите логин', name: 'username' },
      { placeholder: 'Введите пароль', name: 'password' },
    ],
    button: { title: 'Регистрация', method: myFetch.post, url: '/users' },
    phrase: 'Авторизоваться',
    link: '/login',
  },
  сatalog: {
    title: 'Каталог',
  },
};

export const menu = [
  { id: 1, title: 'Главная', url: '/home' },
  { id: 2, title: 'Каталог', url: '/catalog' },
  { id: 3, title: 'Личный кабинет', url: '/login' },
  { id: 4, title: 'Корзина', url: '/basket' },
  { id: 5, title: 'Информация', url: '/information' },
];
