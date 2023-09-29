import LayOut from 'LayOut';
import Home from 'pages/Home';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
      </Route>
    </Routes>
  );
};
