import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { List, Item, A, Img, P, Container } from './CardList.styled';

const CardList = searchValue => {
  const location = useLocation();
  const imgURL = 'https://image.tmdb.org/t/p/w500';
  const search = searchValue.searchValue;

  return (
    <List>
      {search &&
        search.map(({ id, poster_path, title }) => (
          <Item key={id}>
            <A to={`/movies/${id}`} state={{ from: location }}>
              <Img
                src={
                  poster_path
                    ? poster_path && imgURL + poster_path
                    : 'https://svgsilh.com/svg/24530-4f4f4f.svg'
                }
                alt={title}
                width={300}
              />
              <Container>
                <P>{title}</P>
              </Container>
            </A>
          </Item>
        ))}
    </List>
  );
};

export default CardList;

CardList.propTypes = {
  searchValue: PropTypes.array,
};
