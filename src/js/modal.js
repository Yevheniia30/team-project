import refs from './refs';
// -----------импорт настроек и стилей
import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';
// ----------создает модалку с методами откріть и закріть
const instance = basicLightbox.create(document.querySelector('template'), {
  onShow: instance => {
    instance.element().querySelector('button[data-close-modal').onclick =
      instance.close;
  },
});
// -----------закрытие клавишей Esc
window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    instance.close();
  }
});

// ----------слушатель на кнопку
refs.openModalBtn.addEventListener('click', instance.show);
// -------------вызывается метод открыть модалку
