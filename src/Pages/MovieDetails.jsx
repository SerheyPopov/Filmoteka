import { useCallback, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { MovieInfo } from '../components/Api/Api';
import { TvInfo } from '../components/Api/Api';

import MovieCard from '../components/MovieCard/MovieCard';

const FilmInfo = () => {
  const location = useLocation();
  const [filmId, setFilmId] = useState('');
  const params = useParams();
  const path = location.pathname.slice(1, 3);

  const memoized = useCallback(() => {
    if (path === 'tv') {
      return TvInfo(params.filmId);
    }
    return MovieInfo(params.filmId);
  }, [path, params]);

  useEffect(() => {
    try {
      memoized().then(response => {
        setFilmId(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [memoized]);

  return (
    <div>
      <MovieCard card={filmId} />
    </div>
  );
};

export default FilmInfo;
