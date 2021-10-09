import './theme.js';
import './styles.css';
import cardsTemplate from './templates/templates.hbs';
import menu from './menu.json'

const markup = cardsTemplate(menu);

const menuEl = document.querySelector('.js-menu');
menuEl.insertAdjacentHTML('beforeend', markup);