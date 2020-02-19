import { aroundQueries, imagePath, korean } from 'utils/constants';
import fetchData from 'utils/fetchData';

export default async function aroundAPI(payload) {
  const rawResult = await fetchData(aroundQueries[payload.TYPE], [korean]);
  const movieList = rawResult.results;
  const result = [];
  movieList.forEach(movie => {
    if (movie.title && movie.backdrop_path && movie.vote_average) {
      const obj = {};
      obj.id = movie.id;
      obj.title = movie.title;
      obj.backdropPath = `${imagePath.original}${movie.backdrop_path}`;
      obj.rating = movie.vote_average;
      result.push(obj);
    }
  });
  return result;
}
