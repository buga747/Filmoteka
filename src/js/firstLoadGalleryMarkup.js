import { renderFilmsGallery } from './galleryFilmsMarkup';
import { onPageLoad } from './loader';

import { getPopularFilm } from './fetchApi';

function onFirstLoad() {
  getPopularFilm()
    .then(data => {
      if (!data.results) {
        return;
      }
      onPageLoad();
      renderFilmsGallery(data.results);
    })
    .catch(err => console.log(err));
}

onFirstLoad();
