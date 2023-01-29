import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '7b0cd892b7eefe922064cd11488cd5a0';

// fetching films by name
export async function getFilmsByName(query = [], page = 1) {
  try {
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
}

// fetching film by ID
export async function getFilmDetails(id) {
  try {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
}

// fetching popular films for main page
export async function getPopularFilm(page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );

    return response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
}
