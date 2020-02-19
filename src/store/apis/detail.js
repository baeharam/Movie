import axios from 'axios';
import {
  getQuery,
  korean,
  IMG_PATH_ORG,
  IMG_PATH_W500,
  YOUTUBE_PATH,
} from 'utils/constants';

const getMovieDetail = async id => {
  const query = getQuery(`movie/${id}`, [korean]);
  const http = await axios.get(query);
  const result = JSON.parse(http.request.response);

  let genres = '';
  const genreList = result.genres.map(genre => genre.name);
  if (result.genres.length > 3) {
    genreList.splice(3);
  }
  genres = genreList.join(' | ');

  return {
    title: result.title,
    originalTitle: result.original_title,
    tagline: result.tagline,
    releaseDate: result.release_date,
    runtime: `${result.runtime} 분`,
    rating: `★ ${result.vote_average}`,
    genres,
    overview: result.overview,
    posterPath: `${IMG_PATH_W500}${result.poster_path}`,
    backdropPath: `${IMG_PATH_ORG}${result.backdrop_path}`,
  };
};

const getMovieImages = async id => {
  const query = getQuery(`movie/${id}/images`);
  const http = await axios.get(query);
  const result = JSON.parse(http.request.response);

  const images = result.backdrops.map(
    backdrop => `${IMG_PATH_ORG}${backdrop.file_path}`,
  );

  images.concat(
    result.posters.map(poster => `${IMG_PATH_ORG}${poster.file_path}`),
  );

  return images;
};

const getMovieVideos = async id => {
  const query = getQuery(`movie/${id}/videos`, [korean]);
  const http = await axios.get(query);
  const jsonResult = JSON.parse(http.request.response);
  const result = jsonResult.results;

  const videos = result
    .filter(video => video.site === 'YouTube')
    .map(video => `${YOUTUBE_PATH}${video.key}`);

  return videos;
};

const getMovieCasts = async id => {
  const query = getQuery(`movie/${id}/credits`);
  const http = await axios.get(query);
  const jsonResult = JSON.parse(http.request.response);
  const result = jsonResult.cast;

  const casts = result.map(cast => ({
    name: cast.name,
    role: cast.character,
    profilePath: `${IMG_PATH_W500}${cast.profile_path}`,
  }));

  return casts;
};

export default async function detailAPI(payload) {
  const { id } = payload;
  const movieDetails = await getMovieDetail(id);
  const movieImages = await getMovieImages(id);
  const movieVideos = await getMovieVideos(id);
  const movieCasts = await getMovieCasts(id);

  const movie = {};
  Object.assign(movie, movieDetails);
  movie.images = movieImages;
  movie.videos = movieVideos;
  movie.casts = movieCasts;

  return movie;
}
