const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const swchBtn = document.querySelector('.theme-switch__toggle');

function changeTheme(evt) {
    if (evt.target.checked) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
        return
    }
    else
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
}

swchBtn.addEventListener('click', changeTheme)

document.body.classList.add(localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'),);
swchBtn.checked = localStorage.getItem('theme') === Theme.DARK;
