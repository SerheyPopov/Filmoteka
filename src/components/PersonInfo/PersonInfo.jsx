import {
  Container,
  TCont,
  Img,
  Title,
  Rating,
  Overview,
  OverviewText,
} from './PersonInfo.styled';

const PersonFullInfo = prop => {
  const imgURL = 'https://image.tmdb.org/t/p/w500';

  const { profile_path, name, popularity, biography, birthday } = prop.card;

  return (
    <Container>
      <TCont>
        <div>
          <Img
            src={profile_path && imgURL + profile_path}
            alt={name}
            width={400}
          />
        </div>
        <div>
          <Title>{name}</Title>
          <Rating>Rating:{popularity}</Rating>
          <Rating>Birthday: {birthday}</Rating>

          <Overview>biography</Overview>
          <OverviewText>{biography}</OverviewText>
          <div></div>
        </div>
      </TCont>
    </Container>
  );
};
export default PersonFullInfo;
