import LayOut from 'LayOut';
import fetchMovies, { getMoviesList } from 'api/api';
import Home from 'pages/Home';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  {
    getMoviesList().then(console.log);
  }
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
      </Route>
    </Routes>
  );
};
