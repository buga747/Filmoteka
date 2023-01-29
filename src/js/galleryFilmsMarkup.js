import { genresInfo } from './genres-info';
import { getGenresNames } from './getGenreNames';
import ComingSoonImg from '../images/movie-poster-coming-soon.jpg';
const fimGallery = document.querySelector('.js-film-gallery');

export function renderFilmsGallery(arr) {
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

  const markup = arr
    .map(
      ({
        poster_path,
        title,
        genre_ids: genreIds,
        id,
        release_date,
        vote_average,
      }) => {
        return `<div class="film-wrapper movie__item" data-id='${id}'>
                <img class="film-img" 
                src="${poster_path ? POSTER_URL + poster_path : ComingSoonImg}" 
                alt="Movie ${title ? title : 'Unknown title'} poster>
                <div class="description-wrapper">
                    <h2 class="film-title">${
                      title ? title : 'Unknown title'
                    }</h2>
                    <p class="film-genres">${getGenresNames(
                      genreIds,
                      genresInfo
                    )} | ${release_date.slice(0, 4)}
        <span class="movie_rate">${vote_average.toFixed(1)}</span>            
        </p>
                </div>
            </div>`;
      }
    )
    .join('');

  fimGallery.innerHTML = markup;
}
