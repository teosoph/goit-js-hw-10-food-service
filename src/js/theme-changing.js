const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Ссылки на селекторы
const refs = {
  bodyRef: document.querySelector('body'),
  switchRef: document.querySelector('#theme-switch-toggle'),
};

// Ф-я смены Theme у класса body
const setThemeFn = (removeTheme, addTheme) => {
  refs.bodyRef.classList.remove(removeTheme);
  refs.bodyRef.classList.add(addTheme);
};

// Ф-я проверки и изменения состояния checkbox + изменение Theme через ф-ю setThemeFn
const сheckboxChangeFn = () => {
  if (refs.switchRef.checked) {
    setThemeFn(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    setThemeFn(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  }
};

// Ф-я проверки состояния checkbox в localStorage
const localStorageSettingsFn = () => {
  const localStorageSavedТheme = localStorage.getItem('theme');
  if (localStorageSavedТheme === Theme.LIGHT) {
    refs.switchRef.checked = 'true';
    сheckboxChangeFn();
  }
};
localStorageSettingsFn();

// Слушатель на refs.switchRef и применение ф-и сheckboxChangeFn
refs.switchRef.addEventListener('change', сheckboxChangeFn);
