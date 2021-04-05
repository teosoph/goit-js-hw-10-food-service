const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Ссылки на селекторы
const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('#theme-switch-toggle');

// Ф-я смены Theme у класса body
const setThemeFn = (removeTheme, addTheme) => {
  bodyRef.classList.remove(removeTheme);
  bodyRef.classList.add(addTheme);
};

// Ф-я проверки и изменения состояния checkbox + изменение Theme через ф-ю setThemeFn
const сheckboxChangeFn = () => {
  if (switchRef.checked) {
    setThemeFn(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    setThemeFn(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  }
};

// Ф-я проверки состояния checkbox в localStorage
const localStorageSettingsFn = () => {
  const localStorageSettings = localStorage.getItem('theme');
  if (localStorageSettings === Theme.LIGHT) {
    switchRef.checked = 'true';
    сheckboxChangeFn();
  }
};
localStorageSettingsFn();

// Слушатель на switchRef и применение ф-и сheckboxChangeFn
switchRef.addEventListener('change', сheckboxChangeFn);
