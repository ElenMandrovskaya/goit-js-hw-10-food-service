import './styles.css';
import menuList from './data/menu.json';
import createMenu from './templates/templMenu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    menu: document.querySelector('.js-menu'),
    swchBtn: document.querySelector('.theme-switch__toggle')
}
refs.menu.insertAdjacentHTML('beforeend', createMenu(menuList));

function changeTheme(evt) {
    if (evt.target.checked) {
        document.body.classList.add(Theme.DARK)
    }
    else
        document.body.classList.remove(Theme.DARK)
    
}

refs.swchBtn.addEventListener('click', changeTheme)