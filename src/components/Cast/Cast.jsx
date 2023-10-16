import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MovieCast } from '../Api/Api';
import { List, CastContainer, P, Item } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();
  const [result, setReesult] = useState(false);
  const imgURL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    try {
      MovieCast(params.filmId).then(response => {
        if (response.cast.length === 0) {
          return setReesult(true);
        }
        setCast(response.cast);
      });
    } catch (error) {
      console.log(error);
    }
  }, [params.filmId]);

  return (
    <CastContainer>
      {result && <p>No cast</p>}
      <List>
        {cast &&
          cast.map(({ id, profile_path, name }) => (
            <Item key={id}>
              <img
                src={
                  profile_path
                    ? profile_path && imgURL + profile_path
                    : 'https://svgsilh.com/svg/1287911-4f4f4f.svg'
                }
                alt={name}
                width={200}
              />
              <P>{name}</P>
            </Item>
          ))}
      </List>
    </CastContainer>
  );
};

export default Cast;
