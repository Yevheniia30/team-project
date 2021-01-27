import refs from './refs';

import movieTmpl from '../templates/movie.hbs';
import movieLibTmpl from '../templates/movie-library.hbs';

const updateMarkup = results => {
  const markup = movieLibTmpl(results);
  refs.movieLibrary.insertAdjacentHTML('beforeend', markup);
};

export default updateMarkup;
