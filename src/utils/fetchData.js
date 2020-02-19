import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';

const getQuery = (path, queries = []) => {
  let url = `${BASE_URL}${path}?api_key=${API_KEY}`;
  queries.forEach(query => {
    url += `&${query}`;
  });
  return url;
};

export default async function fetchData(path, queries = []) {
  const query = getQuery(path, queries);
  const http = await axios.get(query);
  const jsonResult = JSON.parse(http.request.response);
  return jsonResult;
}
