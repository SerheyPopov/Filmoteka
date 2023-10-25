import { useEffect, useState } from 'react';

import { GetMovies } from '../components/Api/Api';
import CardList from '../components/CardList/CardList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      GetMovies().then(response => {
        setMovies(response.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <CardList searchValue={movies} />
    </div>
  );
};
export default Home;
