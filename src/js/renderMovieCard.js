import { getGenre } from './getGenreNames';
import { getFilmById } from './fetchApi';
import ComingSoonImg from '../images/movie-poster-coming-soon.jpg';
// const basicLightbox = require('basiclightbox');
const inputContainer = document.querySelector('#search-list');
const searchForm = document.querySelector('.js-search');

export function activateMovieModal() {
  setTimeout(() => {
    const movieItems = document.querySelectorAll('.movie__item');

    // console.log(movieItems);

    movieItems.forEach(movie => {
      movie.addEventListener('click', e => {
        e.preventDefault();

        const id = movie.getAttribute('data-id');
        console.log(id);
        getFilmById(id).then(data => renderFilmModal(data));
        searchForm.reset();
      });
    });

    document.querySelector('.backdrop').addEventListener('click', e => {
      if (
        e.target.classList.contains('button-modal-movie--close') ||
        e.target.classList.contains('backdrop')
      ) {
        document.querySelector('.backdrop').classList.add('is-hidden');

        window.addEventListener('keydown', e => {
          document.querySelector('.backdrop').classList.add('is-hidden');
        });

        //Потрібно перерендерить сторінку якщо фільм був видалений
        // renderWatched();
        // renderQueue();
      }
    });
  }, 1000);
}

function renderFilmModal(data) {
  inputContainer.innerHTML = '';
  const {
    poster_path,
    title,
    popularity,
    original_title,
    vote_count,
    vote_average,
    overview,
    id,
    genres,
    release_date,
  } = data;
  const backdrop = document.querySelector('.backdrop');

  const modalDetails = document.querySelector('.modal-movie__content');
  backdrop.classList.remove('is-hidden');
  //Заповнення id для кнопки Add to watched і Add to queue
  document.querySelector('.modal-movie__content').setAttribute('data-id', id);
  let poster = '';
  if (!poster_path) {
    poster = ComingSoonImg;
  } else {
    poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  }
  const markup = `<div class="movie-detail">
          <div class="movie-detail__image">
            <img src="${poster}" alt="${title} poster" class="movie-detail__img" >
          </div>
          <div class="movie-detail__content">
            <h2 class="movie-detail__title">${title}</h2>
            <ul class="movie-detail__list">
              <li class="movie-detail__item">
                <h4 class="movie-detail__heading">Vote / Votes</h4>
                <p class="movie-detail__value"><span>${vote_average}</span> / ${vote_count}</p>
              </li>
              <li class="movie-detail__item">
                <h4 class="movie-detail__heading">Popularity</h4>
                <p class="movie-detail__value">${popularity}</p>
              </li>
              <li class="movie-detail__item">
                <h4 class="movie-detail__heading">Original Title</h4>
                <p class="movie-detail__value">${original_title}</p>
              </li>
              <li class="movie-detail__item">
                <h4 class="movie-detail__heading">Genre</h4>
                 <p class="movie-detail__value">${getGenre(genres)} </p>
              </li>
            </ul>
            <h5 class="movie-detail__subtitle">About</h5>
            <p class="movie-detail__text">${overview}</p>
            <div class="movie-detail__btns">
              <button class="movie-detail__btn-main add-to-watched-btn" id="add-watched-btn">add to Watched</button>
              <button class="movie-detail__btn-main add-queue-btn" type="button">Add to queue</button>
        
            </div>
          </div>
        </div>
        `;

  modalDetails.innerHTML = markup;
  //додає слухача на кнопку і перевіряє чи є цей фільм в local storage
  // addListenerAddWatched();
  // addListenerQueueAddBtn();
  // addListenerAddBtnTrailer();
  // checkStatusBTN(Number(id));
  // checkQueueBtn(Number(id));
}
