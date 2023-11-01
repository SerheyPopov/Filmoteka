import { useEffect, useState } from 'react';

import { GetMovies } from '../components/Api/Api';
import CardList from '../components/CardList/CardList';
const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetMovies().then(respons=>setMovies(respons));
  }, []);

  return (
    <div>
      <CardList searchValue={movies} />
    </div>
  );
};
export default Movie;
