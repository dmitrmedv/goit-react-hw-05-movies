import { getReviewsById } from 'api/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './reviews.css';

const Reviews = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const result = await getReviewsById(id);
        setItem(result.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [id]);

  const list = item.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <p className="author">Author: {author}</p>
        <p>{content}</p>
      </li>
    );
  });

  return item.length < 1 ? (
    <p>We dont have reviews for this movie</p>
  ) : (
    <ul className="reviews_list">{list}</ul>
  );
};

export default Reviews;
