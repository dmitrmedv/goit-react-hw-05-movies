import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieInfo = () => {
  const location = useLocation();
  return (
    <div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieInfo;
