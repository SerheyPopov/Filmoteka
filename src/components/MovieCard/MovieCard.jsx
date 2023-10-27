import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../../icon/goBack.svg';

import {
  Container,
  TCont,
  Img,
  Title,
  Rating,
  GenresList,
  Overview,
  OverviewText,
  StarsContainer,
  TagLine,
  StarsCo,
  GoBack,
  GoBackSvg,
  BgCont,
  ImgCont,
  Item,
  DiscrCont,
  TimeCont,
  RatingCont,
} from './MovieCard.styled';
import Loader from '../Loader/Loader';

const MovieCard = card => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const imgURL = 'https://image.tmdb.org/t/p/original';
  const {
    poster_path,
    title,
    vote_average,
    overview,
    genres,
    name,
    backdrop_path,
    release_date,
    runtime,
    tagline,
    first_air_date,
    episode_run_time,
  } = card.card;
  console.log(card.card);

  function time() {
    if (episode_run_time) {
      let minutes = episode_run_time[0] % 60;
      if (isNaN(minutes)) {
        return 0 + 'm';
      }
      return minutes + 'm';
    }
    let hours = Math.trunc(runtime / 60);
    let minutes = runtime % 60;
    return hours + 'h ' + minutes + 'm';
  }

  function date() {
    if (first_air_date) {
      return first_air_date.slice(0, 4);
    }
    return release_date.slice(0, 4);
  }

  return !vote_average ? (
    <Loader />
  ) : (
    <Container>
      <GoBack to={backLinkHref}>
        <GoBackSvg>
          <use href={Icon + '#back'} />
        </GoBackSvg>
      </GoBack>

      <BgCont
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),  url(${
            poster_path && imgURL + backdrop_path
          })`,
        }}
      ></BgCont>
      <TCont>
        <ImgCont>
          <Img
            src={poster_path && imgURL + poster_path}
            alt={title}
            width={350}
          />
        </ImgCont>
        <div>
          <Title>
            {title || name} ({date()})
          </Title>
          <DiscrCont>
            <GenresList>
              {genres &&
                genres.map(genre => <Item key={genre.id}>{genre.name}</Item>)}
            </GenresList>
            <TimeCont>
              <p>{time()}</p>
            </TimeCont>
          </DiscrCont>

          <RatingCont>
            <Rating>Rating:</Rating>
            <StarsContainer>
              <StarsCo $rate={vote_average / 0.1}></StarsCo>
            </StarsContainer>
          </RatingCont>

          <div>
            <TagLine>
              <i>{tagline}</i>
            </TagLine>
          </div>

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

// adult
// :
// false
// backdrop_path
// :
// "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg"
// belongs_to_collection
// :
// {id: 87359, name: 'Mission: Impossible Collection', poster_path: '/geEjCGfdmRAA1skBPwojcdvnZ8A.jpg', backdrop_path: '/jYl0UuJFcmhymv9ZNO14lPLDY1Z.jpg'}
// budget
// :
// 291000000
// genres
// :
// (2) [{…}, {…}]
// homepage
// :
// "https://www.missionimpossible.com"
// id
// :
// 575264
// imdb_id
// :
// "tt9603212"
// original_language
// :
// "en"
// original_title
// :
// "Mission: Impossible - Dead Reckoning Part One"
// overview
// :
// "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most."
// popularity
// :
// 1956.457
// poster_path
// :
// "/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
// production_companies
// :
// (3) [{…}, {…}, {…}]
// production_countries
// :
// [{…}]
// release_date
// :
// "2023-07-08"
// revenue
// :
// 567148955
// runtime
// :
// 164
// spoken_languages
// :
// (4) [{…}, {…}, {…}, {…}]
// status
// :
// "Released"
// tagline
// :
// "We all share the same fate."
// title
// :
// "Mission: Impossible - Dead Reckoning Part One"
// video
// :
// false
// vote_average
// :
// 7.727
// vote_count
// :
// 1879
