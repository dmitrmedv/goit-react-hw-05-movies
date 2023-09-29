import axios from 'axios';

const KEY = 'cdfc08b3296f0164149119b33e9bcc21';

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export async function getMoviesList() {
  const { data } = await instance.get(`/trending/movie/day?api_key=${KEY}`);
  return data;
}
