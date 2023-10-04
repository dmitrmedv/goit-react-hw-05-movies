import { getMovieByName } from 'api/api';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import './movies.css';

const Movies = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  useEffect(() => {
    const fetchName = async () => {
      try {
        const result = await getMovieByName(name);
        if (result.results.length < 1) {
          setNotFound(true);
        } else {
          setList(result.results);
          setNotFound(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (name) {
      fetchName();
    }
  }, [name]);

  useState(() => {
    if (query) {
      const fetchName = async () => {
        try {
          const { results } = await getMovieByName(query);
          setList(results);
        } catch (error) {
          console.log(error);
        }
      };
      if (query) {
        fetchName();
      }
    }
  }, []);

  const resultList =
    list &&
    list.map(({ id, original_title }) => {
      return (
        <li key={id}>
          <Link to={`${id}`} state={{ from: location }} className="item">
            {original_title}
          </Link>
        </li>
      );
    });
  function getMovie(value) {
    setName(value);
  }

  return (
    <div className="container movies">
      <SearchForm getMovie={getMovie} />
      {notFound && <h2>Nothing found...</h2>}
      {!notFound && <ol className="search_list">{list && resultList}</ol>}
    </div>
  );
};

export default Movies;
