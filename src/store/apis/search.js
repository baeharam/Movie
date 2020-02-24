import { korean } from 'utils/constants';
import fetchData from 'utils/fetchData';

export default async function searchAPI(payload) {
  const { movie } = payload;
  if (!movie.length) return [];
  const jsonResult = await fetchData('search/movie', [
    korean,
    `query=${movie}`,
  ]);
  const result = jsonResult.results;

  return result.map(item => ({
    id: item.id,
    title: item.title,
  }));
}
