import menuList from '../data/menu.json';
import createMenu from '../templates/templMenu.hbs';

const menu = document.querySelector('.js-menu');
menu.insertAdjacentHTML('beforeend', createMenu(menuList));