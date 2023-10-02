import LayOut from 'LayOut';
import Card from 'pages/Card/Card';
import Cast from 'pages/Cast/Cast';
import Home from 'pages/Home';
import Movies from 'pages/Movies/Movies';
import Reviews from 'pages/Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>{' '}
        <Route path="/movies/:id" element={<Card />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
