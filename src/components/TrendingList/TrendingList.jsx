import { getMoviesList } from 'api/api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TrendingList = () => {
  const [list, setList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const trendingList = async () => {
      try {
        const result = await getMoviesList();
        setList(result.results);
      } catch (error) {
        console.log(error);
      }
    };
    trendingList();
  }, []);

  return (
    <ul>
      {list.map(({ id, title, name }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`} state={location}>
              {title || name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingList;
