import { getCastById } from 'api/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const result = await getCastById(id);
        setItem(result.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [id]);

  const list = item.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });

  return <ul>{list}</ul>;
};

export default Cast;
