import { getFilmDetails } from './fetchApi';
import * as basicLightbox from 'basiclightbox';
import { getGenresNames } from './getGenreNames';
import ComingSoonImg from '../images/movie-poster-coming-soon.jpg';
const container = document.querySelector('.movie-card');
const basicLightbox = require('basiclightbox');
export function renderMovieCard(data) {
  const {
    poster_path,
    title,
    genre_ids: genreIds,
    vote_average,
    vote_count,
    original_title,
    popularity,
    overview,
    id,
  } = data;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

  const getGener = genre_ids
    ? genre_ids.map(genre => genre.name).join(', ')
    : 'Unknown';

  const basicLightboxOptions = {
    onShow: () => {
      // document.body.classList.add('hide-scroll');
      document.addEventListener('keydown', escClose);
    },

    onClose: () => {
      document.body.classList.remove('hide-scroll');
      //   closeBtn.removeEventListener('click', () => {
      //     watchBtn.removeEventListener('click', addWatch);
      //     queueBtn.removeEventListener('click', addQueue);
      //     document.removeEventListener('keydown', escClose);
      //     createFilmModalMarkup.close();
      //   });
      //   refreshLibraryList();
    },
  };

  const createFilmModalMarkup = basicLightbox.create(
    `   <div class="film-modal">
                <button class="film-modal__close-btn" type="button"></button>
                <div class="film-modal__poster-wrapper"><img class="film-modal__poster" src="${
                  poster_path ? POSTER_URL + poster_path : ComingSoonImg
                }" alt="Movie ${
      title ? title : 'Unknown title'
    } poster" /></div>
                <div class="film-modal__wrapper">
                  <div class="film-modal__info-wrapper">
                    <h2 class="film-modal__title">${
                      title ? title : 'Unknown title'
                    }</h2>
                    <ul class="film-modal__info-list">
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Vote/Votes</h3>
                            <p class="film-modal__info-text"><span class="film-modal__info-text--vote">${
                              vote_average ? vote_average.toFixed(1) : '--'
                            }</span>  <span class="film-modal__info-text--slash">/</span> <span class="film-modal__info-text--vote film-modal__info-text--vote-count">${
      vote_count ? vote_count : '--'
    }</p></span>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Popularity</h3>
                            <p class="film-modal__info-text">${
                              popularity ? popularity.toFixed(1) : '--'
                            }</p>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Original Title</h3>
                            <p class="film-modal__info-text">${
                              original_title ? original_title : 'Unknown'
                            }</p>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Genre</h3>
                            <p class="film-modal__info-text">${getGenresNames(
                              genreIds,
                              genresInfo
                            )}</p>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Trailer</h3>
                            <p id="trailerBtns-wrapper" class="film-modal__info-text"><button class="film-modal__trailer-btn" type="button" data-id="${id}">Watch trailer<span class="triangle-right"></span></button></p>
                        </li>
                    </ul>
                    <h3 class="film-modal__title-about">About</h3>
                    <p class="film-modal__text-about">${
                      overview ? overview : 'No description'
                    }</p>
                    </div>  
               `,
    basicLightboxOptions
  );
  createFilmModalMarkup.show();
}

function escClose(e) {
  if (e.key === 'Escape' && createFilmModalMarkup.visible()) {
    createFilmModalMarkup.close();
  }
}
