import axios from 'axios';
import { aroundQueries, IMG_PATH_ORG } from 'utils/constants';

export default async function aroundAPI(payload) {
  const query = aroundQueries[payload.TYPE];
  const http = await axios.get(query);
  const res = JSON.parse(http.request.response);
  const movieList = res.results;
  const result = [];
  movieList.forEach(movie => {
    if (movie.title && movie.backdrop_path && movie.vote_average) {
      const obj = {};
      obj.id = movie.id;
      obj.title = movie.title;
      obj.backdropPath = `${IMG_PATH_ORG}${movie.backdrop_path}`;
      obj.rating = movie.vote_average;
      result.push(obj);
    }
  });
  return result;
}
