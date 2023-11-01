import { useEffect, useState } from 'react';

import { GetAll } from '../components/Api/Api';
import SliderCard from 'components/SliderCard/SliderCard';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetAll().then(respons => setMovies(respons));
  }, []);
    
  return (
    <div>
      <SliderCard movies={movies} />
    </div>
  );
};
export default Home;
