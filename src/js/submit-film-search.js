import { renderFilmsGallery } from './galleryFilmsMarkup';
import { onPageLoad } from './loader';

import { getFilmsByName } from './fetchApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
    })
    .catch(err => console.log(err))
    .finally(searchForm.reset());
}
