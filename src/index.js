import './styles.css';
import menuList from './data/menu.json';
import createMenu from './templates/templMenu.hbs';

const refs = {
     menu: document.querySelector('.js-menu')
}
refs.menu.insertAdjacentHTML('beforeend', createMenu(menuList));