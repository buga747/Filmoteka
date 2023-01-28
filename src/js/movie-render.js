import { getFilmDetails } from './api';
import { renderMovieCard } from './renderMovieCard';

const container = document.querySelector('.movie-card');
const searchList = document.querySelector('#search-list');

searchList.addEventListener('click', renderFilmById);

function renderFilmById(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }

  const filmId = evt.target.closest('li').getAttribute('data-id');
  console.log(filmId);
  getFilmDetails(filmId).then(data => renderMovieCard(data));
}
