import { genresInfo } from './genres-info';

export function getGenresNames(genreIds, genresInfo) {
  let genresNamesArray = [];

  for (const genreId of genreIds) {
    genresInfo.map(genreInfo => {
      if (genreInfo.id === genreId) {
        genresNamesArray.push(genreInfo.name);
      }
    });
  }

  if (genresNamesArray.length > 2) {
    return genresNamesArray.slice(0, 2).join(', ') + ', Other';
  }

  return genresNamesArray.join(', ');
}
