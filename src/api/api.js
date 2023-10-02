import axios from 'axios';

const KEY = 'cdfc08b3296f0164149119b33e9bcc21';

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export async function getMoviesList() {
  const { data } = await instance.get(`/trending/movie/day?api_key=${KEY}`);
  return data;
}

export async function getMovieById(id) {
  const { data } = await instance.get(
    `/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return data;
}

export async function getCastById(id) {
  const { data } = await instance.get(
    `/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return data;
}

export async function getReviewsById(id) {
  const { data } = await instance.get(
    `/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return data;
}

export async function getMovieByName(name) {
  const { data } = await instance.get(
    `/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${name}`
  );
  return data;
}
