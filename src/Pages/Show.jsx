import { useEffect, useState } from 'react';
import { GetTv } from '../components/Api/Api';
import CardList from '../components/CardList/CardList';

const Show = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    try {
      GetTv().then(response => {
        setTrendMovies(response.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <CardList searchValue={trendMovies} />;
};
export default Show;
