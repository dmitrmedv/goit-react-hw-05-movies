import { getMovieByName } from 'api/api';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(null);
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  useEffect(() => {
    const fetchName = async () => {
      try {
        const result = await getMovieByName(name);
        setList(result.results);
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
        <Link to={`${id}`} key={id} state={{ from: location }}>
          <li>{original_title}</li>
        </Link>
      );
    });
  function getMovie(value) {
    setName(value);
  }

  return (
    <>
      <SearchForm getMovie={getMovie} />
      <ul>{list && resultList}</ul>
    </>
  );
};

export default Movies;
