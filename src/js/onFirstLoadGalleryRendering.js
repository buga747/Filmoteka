import { renderFilmsGallery } from './galleryFilmsMarkup';
import { onPageLoad } from './loader';
import { getPopularFilm } from './fetchApi';
import { activateMovieModal } from './renderMovieCard';
import Pagination from 'tui-pagination';
const paginationContainer = document.querySelector('.tui-pagination');
const perPage = 20;
let page = 1;

function onFirstLoad() {
  getPopularFilm()
    .then(data => {
      if (!data.results) {
        return;
      }
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
        getPopularFilm(page).then(data => {
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
    .catch(err => console.log(err));
}

onFirstLoad();
