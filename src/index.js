import './styles.css';
// import './sass/main.scss';

import refs from './js/refs';
import fetchMovies from './js/fetchMovies';
import updateMarkup from './js/updateMarkup';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.query.value;

  refs.movieLibrary.innerHTML = '';
  form.reset();

  fetchMovies(inputValue).then(updateMarkup);
});
