import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { GoBack, List, Cast, Review } from './MovieDetails.styled';
import { MovieInfo } from '../components/Api/Api';
import MovieCard from '../components/MovieCard/MovieCard';

const FilmInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const [filmId, setFilmId] = useState('');
  const params = useParams();

  useEffect(() => {
    try {
      MovieInfo(params.filmId).then(response => {
        setFilmId(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [params.filmId]);

  return (
    <div>
      <List>
        <li>
          <GoBack to={backLinkHref}>Go back</GoBack>
        </li>
        <li>
          <Cast to="cast" state={{ from: backLinkHref }}>
            Cast
          </Cast>
        </li>
        <li>
          <Review to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Review>
        </li>
      </List>
      <MovieCard card={filmId} />
    </div>
  );
};

export default FilmInfo;
