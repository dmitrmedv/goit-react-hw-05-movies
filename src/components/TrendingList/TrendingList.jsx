import { getMoviesList } from 'api/api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './trendingList.css';

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
    <ol className="trending_list">
      <h2>Trending today</h2>
      {list.map(({ id, title, name }) => {
        return (
          <li key={id} className="item">
            <Link
              to={`movies/${id}`}
              state={{ from: location }}
              className="item"
            >
              {title || name}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default TrendingList;
