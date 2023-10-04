import { getCastById } from 'api/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './cast.css';

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

  const list = item.map(({ id, name, profile_path }) => {
    return (
      <li key={id}>
        <div className="profile_img">
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
          />
        </div>
        <p>{name}</p>
      </li>
    );
  });

  return <ul>{list}</ul>;
};

export default Cast;
