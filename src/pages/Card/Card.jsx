import { getMovieById } from 'api/api';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Card = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location Card', location);

  useEffect(() => {
    getMovieById(id)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [id]);

  function handleBack() {
    navigate(location.state);
  }

  return (
    <>
      <div>
        <button onClick={handleBack}>Go back</button>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="{movie.title || movie.name}"
          />
          <div>
            <p>{movie.title || movie.name}</p>
            <p>User Score: {Math.round(movie.vote_average)}%</p>
            <p>Overview</p>
            <p>{movie.overview}</p>
            <p>Genres</p>
            <p>XXX</p>
          </div>
        </div>
      </div>
      <MovieInfo id={id} />
    </>
  );
};

export default Card;
