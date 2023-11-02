export default function translate(translationFile) {
  const userLanguage = navigator.language;
  const elementsToTranslate = document.querySelectorAll('[data-translate]');

  if (userLanguage.startsWith('en')) {
    
  };

  elementsToTranslate.forEach(element => {
    const key = element.dataset.translate;
    element.textContent = translationFile[key];
  });
}