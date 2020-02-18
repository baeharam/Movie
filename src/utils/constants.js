const API_KEY = 'd5e4a2eb5fb264de1583b6945d203546';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getQuery = (path, queries = []) => {
  let url = `${BASE_URL}${path}?api_key=${API_KEY}`;
  queries.forEach(query => {
    url += `&${query}`;
  });
  return url;
};

export const IMG_PATH_ORG = 'https://image.tmdb.org/t/p/original';
export const IMG_PATH_W500 = 'https://image.tmdb.org/t/p/w500';
export const YOUTUBE_PATH = 'http://www.youtube.com/embed/';

export const AROUND_NOW_PLAYING = 'AROUND_NOW_PLAYING';
export const AROUND_POPULAR = 'AROUND_POPULAR';
export const AROUND_TOP_RATED = 'AROUND_TOP_RATED';
export const AROUND_UPCOMING = 'AROUND_UPCOMING';

export const korean = 'language=ko-KR';

export const aroundQueries = {
  [AROUND_NOW_PLAYING]: getQuery('movie/now_playing', [korean]),
  [AROUND_POPULAR]: getQuery('movie/popular', [korean]),
  [AROUND_TOP_RATED]: getQuery('movie/top_rated', [korean]),
  [AROUND_UPCOMING]: getQuery('movie/upcoming', [korean]),
};

export const aroundList = [
  { text: '현재상영중', state: 'prev', type: AROUND_NOW_PLAYING },
  { text: '인기', state: 'cur', type: AROUND_POPULAR },
  { text: '좋은평가', state: 'next', type: AROUND_TOP_RATED },
  { text: '상영예정', state: 'none', type: AROUND_UPCOMING },
];
