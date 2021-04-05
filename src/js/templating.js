// Импорт меню  из menu.json
import menuList from '../menu.json';

// Импорт шаблона из menu-item-list.hbs
import menuItemListTemplate from '../templates/menu-item-list.hbs';

// Ссылки на селектор .js-menu
const menuRef = document.querySelector('.js-menu');

// Добавляем menuList в переменную menuItemSample
const menuItemSample = menuItemListTemplate(menuList);

// Добавляем код шаблона menuItemSample в menuRef
menuRef.insertAdjacentHTML('afterbegin', menuItemSample);
