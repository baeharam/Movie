import axios from 'axios';
import { getQuery } from 'utils/constants';

export default async function getIntroMovie() {
  const randomMovie = {
    backdropPath: '',
    title: '',
    tagline: '',
  };
  try {
    let http = await axios.get(getQuery('trending/movie/week'));
    let trendingList = JSON.parse(http.request.response);
    trendingList = trendingList.results;
    const randomMovieID =
      trendingList[Math.floor(Math.random() * trendingList.length)].id;

    while (
      !randomMovie.backdropPath ||
      !randomMovie.title ||
      !randomMovie.tagline
    ) {
      // eslint-disable-next-line no-await-in-loop
      http = await axios.get(
        getQuery(`movie/${randomMovieID}`, ['language=ko-KR']),
      );
      const result = JSON.parse(http.request.response);
      randomMovie.backdropPath = result.backdrop_path;
      randomMovie.title = result.title;
      randomMovie.tagline = result.tagline;
    }
    return randomMovie;
  } catch (e) {
    throw new Error(e.message);
  }
}
