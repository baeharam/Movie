import axios from 'axios';
import { getQuery, IMG_PATH_ORG } from 'utils/constants';

export default async function introAPI() {
  const randomMovie = {};
  let http = await axios.get(getQuery('trending/movie/week'));
  let trendingList = JSON.parse(http.request.response);
  trendingList = trendingList.results;
  let randomMovieID =
    trendingList[Math.floor(Math.random() * trendingList.length)].id;

  while (
    !randomMovie.backdropPath ||
    !randomMovie.title ||
    !randomMovie.tagline
  ) {
    randomMovieID =
      trendingList[Math.floor(Math.random() * trendingList.length)].id;
    // eslint-disable-next-line no-await-in-loop
    http = await axios.get(
      getQuery(`movie/${randomMovieID}`, ['language=ko-KR']),
    );
    const result = JSON.parse(http.request.response);
    randomMovie.backdropPath = `${IMG_PATH_ORG}${result.backdrop_path}`;
    randomMovie.title = result.title;
    randomMovie.tagline = result.tagline;
  }

  randomMovie.title = randomMovie.title.replace(/"/i, '');

  return randomMovie;
}
