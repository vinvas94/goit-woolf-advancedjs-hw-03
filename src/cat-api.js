import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_n4VWIaVJ8MEwjf6Kd5BbI1T5MOpXlUsfsYzkr7ScX1gYNGyuofj3slrEniHrovtb';

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`);
}

export function fetchCatByBreeds(breedId) {
  return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`);
}
