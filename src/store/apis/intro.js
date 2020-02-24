import { imagePath, korean } from 'utils/constants';
import fetchData from 'utils/fetchData';

export default async function introAPI() {
  const randomMovie = {};
  let trendingList = await fetchData('trending/movie/week');
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
    const result = await fetchData(`movie/${randomMovieID}`, [korean]);
    randomMovie.backdropPath = `${imagePath.original}${result.backdrop_path}`;
    randomMovie.title = result.title;
    randomMovie.tagline = result.tagline;
    randomMovie.id = result.id;
  }

  return randomMovie;
}
