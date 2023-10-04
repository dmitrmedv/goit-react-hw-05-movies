import { Link, Outlet, useLocation } from 'react-router-dom';
import './movieInfo.css';

const MovieInfo = () => {
  const location = useLocation();
  return (
    <div className="movie_info">
      <p>Additional information</p>
      <ul className="movie_info_list">
        <li>
          <Link to="cast" state={location}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieInfo;
