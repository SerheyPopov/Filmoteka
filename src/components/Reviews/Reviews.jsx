import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MovieReviews } from '../Api/Api';
import { Autor, AutorReview } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [result, setReesult] = useState(false);
  const params = useParams();

  useEffect(() => {
    try {
      MovieReviews(params.filmId).then(response => {
        if (response.total_results === 0) {
          return setReesult(true);
        }
        setReviews(response.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [params.filmId]);

  return (
    <div>
      {result && <p>Review not written yet</p>}
      <ul>
        {reviews &&
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Autor>{author}</Autor>
              <AutorReview>{content}</AutorReview>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
