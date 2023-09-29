import { getMoviesList } from 'api/api';
import { useEffect, useState } from 'react';

const TrendingList = () => {
  const [list, setList] = useState([]);

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
        return <li key={id}>{title || name}</li>;
      })}
    </ul>
  );
};

export default TrendingList;
