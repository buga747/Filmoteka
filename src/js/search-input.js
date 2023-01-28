// import { renderMoviesOnInput } from './input-list';
// import { getFilmsByName } from './api';
// import debounce from 'lodash.debounce';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const searchFormInputEl = document.querySelector('#searchQuery');
// const inputContainer = document.querySelector('#search-list');

// const DEBOUNCE_DELAY = 300;
// searchFormInputEl.addEventListener(
//   'input',
//   debounce(onInputSearch, DEBOUNCE_DELAY)
// );

// function onInputSearch(evt) {
//   const queryValue = evt.target.value;

//   console.log(queryValue);
//   inputContainer.innerHTML = '';

//   if (queryValue === '') {
//     Notify.failure('Please type something');
//     return;
//   }

//   getFilmsByName(queryValue)
//     .then(({ results, total_results }) => {
//       console.log(results);
//       if (total_results === 0 && queryValue !== 0) {
//         Notify.failure('Sorry, film is not found');
//       }
//       if (results.length > 0) {
//         renderMoviesOnInput(results);
//       } else {
//         inputContainer.innerHTML = '';
//       }
//     })
//     .catch();
// }
