import { renderFilmsGallery } from './galleryFilmsMarkup';
import { onPageLoad } from './loader';
import { activateMovieModal } from './renderMovieCard';
import { getFilmsByName } from './fetchApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Pagination from 'tui-pagination';
const paginationContainer = document.querySelector('.tui-pagination');
const perPage = 20;
let page = 1;

const searchForm = document.querySelector('.js-search');
const inputContainer = document.querySelector('#search-list');

searchForm.addEventListener('submit', onSubmitSearch);

function onSubmitSearch(evt) {
  evt.preventDefault();
  const queryValue = evt.currentTarget.searchQuery.value.trim();

  if (queryValue === '') {
    Notify.failure('Please insert some text');
    return;
  }

  getFilmsByName(queryValue)
    .then(data => {
      if (!data.results) {
        return;
      }
      if (data.results.length === 0 && queryValue) {
        Notify.failure('Sorry, film is not found');
        return;
      }
      inputContainer.innerHTML = '';
      onPageLoad();
      renderFilmsGallery(data.results);
      activateMovieModal();
      const pagination = new Pagination(paginationContainer, {
        totalItems: `${data.total_results}`,
        itemsPerPage: `${perPage}`,
        visiblePages: 5,
        centerAlign: true,
      });

      pagination.reset(data.total_results);
      pagination.on('beforeMove', e => {
        page = e.page;
        getFilmsByName(queryValue).then(data => {
          if (!data.results) {
            return;
          }
          onPageLoad();
          renderFilmsGallery(data.results);
          activateMovieModal();
          window.scrollTo({
            behavior: 'smooth',
            top: 0,
          });
        });
      });
    })
    .catch(err => console.log(err))
    .finally(searchForm.reset());
}
