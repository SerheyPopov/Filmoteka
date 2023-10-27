import { useEffect, useState } from 'react';
import { useParams, useLocation, NavLink } from 'react-router-dom';

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
      <NavLink to={backLinkHref}>Go back</NavLink>
      <PersonFullInfo card={filmId} />
    </div>
  );
};

export default Person;
