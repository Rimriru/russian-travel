import translate from "./utils/translation.js";
import enTranslation from './utils/en.js';
import ruTranslation from './utils/ru.js';
import observer from "./utils/observer.js";

const hiddenElements = document.querySelectorAll('.hid');
const ruLangButton = document.querySelector('#ru-lang');
const enLangButton = document.querySelector('#en-lang');
const userLanguage = navigator.language;

hiddenElements.forEach(elem => observer.observe(elem));

if(userLanguage.startsWith('en')) {
  translate(enTranslation);
  enLangButton.classList.add('active');
} else {
  ruLangButton.classList.add('active');
}

ruLangButton.addEventListener('click', () => {
  translate(ruTranslation);
  enLangButton.classList.remove('active');
  ruLangButton.classList.add('active');
});
enLangButton.addEventListener('click', () => {
  translate(enTranslation);
  ruLangButton.classList.remove('active');
  enLangButton.classList.add('active');
});
