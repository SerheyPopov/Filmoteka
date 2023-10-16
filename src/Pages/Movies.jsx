import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { SearchMovie } from '../components/Api/Api';
import CardList from '../components/CardList/CardList';
import Searchbar from '../components/SearchBar/SearchBar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [film, setFilm] = useState([]);
  const search = searchParams.get('query');

  useEffect(() => {
    try {
      if (!search) {
        return;
      }
      SearchMovie(search).then(response => {
        if (response.total_results === 0) {
          return toast.error(`${search} not found`);
        }
        setFilm(response.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  const handleChange = search => {
    if (search.search === '') {
      return toast.error('Please, use your keyboard');
    }
    setSearchParams({ query: search.search });
  };

  return (
    <div>
      <Searchbar onSubmit={handleChange} />
      <CardList searchValue={film} />
      <Toaster toastOptions={{ duration: 1500 }} position="top-right" />
    </div>
  );
};

export default Movies;
