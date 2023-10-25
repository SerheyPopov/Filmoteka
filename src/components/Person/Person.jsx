import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { GoBack } from '../../Pages/MovieDetails.styled';
import { PersonInfo } from '../../components/Api/Api';
import PersonFullInfo from '../PersonInfo/PersonInfo';

const Person = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const [filmId, setFilmId] = useState('');
  const params = useParams();

  useEffect(() => {
    try {
      PersonInfo(params.personId).then(response => {
        setFilmId(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [params.personId]);

  return (
    <div>
      <GoBack to={backLinkHref}>Go back</GoBack>
      <PersonFullInfo card={filmId} />
    </div>
  );
};

export default Person;
