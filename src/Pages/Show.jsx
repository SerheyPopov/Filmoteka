import { useEffect, useState } from 'react';
import { GetAll } from '../components/Api/Api';
import CardList from '../components/CardList/CardList';

const Show = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    try {
      GetAll().then(response => {
        setTrendMovies(response.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <CardList searchValue={trendMovies} />;
};
export default Show;
