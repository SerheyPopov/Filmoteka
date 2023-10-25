import { List, Item, A, Img, P, Container } from './PersonList.styled';
import { useLocation } from 'react-router-dom';

const PersonList = prop => {
  const location = useLocation();
  const imgURL = 'https://image.tmdb.org/t/p/w500';
  const person = prop.person;
  return (
    <List>
      {person &&
        person.map(({ id, profile_path, name }) => (
          <Item key={id}>
            <A to={`/person/${id}`} state={{ from: location }}>
              <Img
                src={
                  profile_path
                    ? profile_path && imgURL + profile_path
                    : 'https://svgsilh.com/svg/24530-4f4f4f.svg'
                }
                alt={name}
                width={300}
              />
              <Container>
                <P>{name}</P>
              </Container>
            </A>
          </Item>
        ))}
    </List>
  );
};

export default PersonList;
