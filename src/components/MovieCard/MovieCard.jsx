import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Container,
  TCont,
  Img,
  Title,
  Rating,
  Span,
  GenresList,
  Overview,
  OverviewText,
} from './MovieCard.styled';
import Loader from '../Loader/Loader';

const MovieCard = card => {
  const imgURL = 'https://image.tmdb.org/t/p/w500';
  const { poster_path, title, vote_average, overview, genres } = card.card;

  return (
    <Container>
      <TCont>
        <div>
          <Img
            src={poster_path && imgURL + poster_path}
            alt={title}
            width={400}
          />
        </div>
        <div>
          <Title>{title}</Title>
          <Rating>Rating:{vote_average}</Rating>
          <Span>Genres:</Span>
          <GenresList>
            {genres &&
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </GenresList>
          <Overview>Overview</Overview>
          <OverviewText>{overview}</OverviewText>
          <div>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </TCont>
    </Container>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  card: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
