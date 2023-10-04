import { getMovieById } from 'api/api';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './card.css';

const Card = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const locationForBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(id)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [id]);

  function handleBack() {
    navigate(locationForBack.current);
  }

  return (
    <>
      <div className="movie_card container">
        <button onClick={handleBack} className="btn_back">
          Go back
        </button>
        <div className="wrapper_card">
          <div className="poster_box">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title || movie.name}
              width={400}
            />
          </div>
          <div className="description">
            <p className="title_movie">{movie.title || movie.name}</p>
            <p>User Score: {(movie.vote_average * 10).toFixed(0)}%</p>
            <p>Overview</p>
            <p>{movie.overview}</p>
            <p>Genres</p>
            <p>
              {movie.genres &&
                movie.genres.map(({ id, name }) => (
                  <span key={id}>{name} </span>
                ))}
            </p>
          </div>
        </div>
      </div>
      <MovieInfo id={id} />
    </>
  );
};

export default Card;
