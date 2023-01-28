// import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '7b0cd892b7eefe922064cd11488cd5a0';

// export async function getFilmsByName(query) {
//   try {
//     const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`;
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// }

// export async function getFilmDetails(id) {
//   try {
//     const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     Notify.failure('Oops, an error occurred');
//   }
// }

// // https://api.themoviedb.org/3/search/company?api_key=7b0cd892b7eefe922064cd11488cd5a0&query=tro&page=1

// // export default class MoviesApiService {
// //   constructor() {
// //     this.page = 1;
// //     this.searchQuery = '';
// //     this.lang = '';
// //     this.genre = '';
// //     this.year = '';
// //     this.originalLanguage = '';
// //     this.vote = '';
// //   }

// //   async getPopularFilms() {
// //     try {
// //       const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&page=${this.page}`;
// //       const response = await axios.get(url);
// //       return response.data;
// //     } catch (error) {
// //       Notify.failure('Oops, an error occurred');
// //     }
// //   }

// //   async getTrendFilms() {
// //     try {
// //       const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}`;
// //       const response = await axios.get(url);
// //       return response.data;
// //     } catch (error) {
// //       Notify.failure('Oops, an error occurred');
// //     }
// //   }

// //   async getFilmsByName() {
// //     try {
// //       const searchParams = new URLSearchParams({
// //         api_key: 'e236468c654efffdf9704cd975a74a96',
// //         query: this.searchQuery,
// //         language: 'en-US',
// //         page: this.page,
// //         include_adult: false,
// //       });
// //       const url = `${BASE_URL}search/movie?${searchParams}`;
// //       const response = await axios.get(url);
// //       return response.data;
// //     } catch (error) {
// //       return error;
// //     }
// //   }

// //   async getFilmDetails(id) {
// //     try {
// //       const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${this.lang}`;
// //       const response = await axios.get(url);
// //       return response.data;
// //     } catch (error) {
// //       Notify.failure('Oops, an error occurred');
// //     }
// //   }

// //   async getFilmVideo(id) {
// //     try {
// //       const url = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`;
// //       const response = await axios.get(url);
// //       return response.data;
// //     } catch (error) {
// //       Notify.failure('Oops, an error occurred');
// //     }
// //   }

// //   async getFilteredMovies() {
// //     try {
// //       const searchParams = new URLSearchParams({
// //         api_key: 'e236468c654efffdf9704cd975a74a96',
// //         language: this.lang,
// //         sort_by: 'popularity.desc',
// //         page: this.page,
// //         include_adult: false,
// //         with_genres: this.genre,
// //         primary_release_year: this.year,
// //         with_original_language: this.originalLanguage,
// //       });
// //       const url = `${BASE_URL}discover/movie?${searchParams}&vote_average.gte=${this.vote}`;
// //       const response = await axios.get(url);
// //       return response.data;
// //     } catch (error) {
// //       return error;
// //     }
// //   }

// //   set query(newQuery) {
// //     this.searchQuery = newQuery;
// //   }

// //   get query() {
// //     return this.searchQuery;
// //   }

// //   setLang(newLang) {
// //     this.lang = newLang;
// //   }

// //   getLang() {
// //     return this.lang;
// //   }

// //   incrementPage() {
// //     this.page += 1;
// //   }
// //   decrementPage() {
// //     this.page -= 1;
// //   }
// //   resetPage() {
// //     this.page = 1;
// //   }
// // }
