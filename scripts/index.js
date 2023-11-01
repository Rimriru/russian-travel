import translate from "./translations/translation.js";
import enTranslation from './translations/en.js';
import ruTranslation from './translations/ru.js';

const ruLangButton = document.querySelector('#ru-lang');
const enLangButton = document.querySelector('#en-lang');
const userLanguage = navigator.language;

if(userLanguage.startsWith('en')) {
  translate(enTranslation);
}

ruLangButton.addEventListener('click', () => {
  translate(ruTranslation);
});
enLangButton.addEventListener('click', () => {
  translate(enTranslation);
});

// const observer = new IntersectionObserver();