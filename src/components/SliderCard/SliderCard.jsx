import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import '../../index.css';
import {
  List,
  Item,
  A,
  Img,
  P,
  Container,
  TitileContainer,
  SubContainer,
  Rating,
  RatingText,
} from './SliderCard.styled';

const SliderCard = prop => {

  const location = useLocation();

  // console.log(prop.movies);
  const imgURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <Container>
      
      <SubContainer>
        <Swiper
          spaceBetween={30}
          slidesPerView={7}
          centeredSlides={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {prop.movies &&
            prop.movies.map(
              ({ id, poster_path, title, name, vote_average }) => (
                <SwiperSlide key={id}>
                  <A to={`/movies/${id}`} state={{ from: location }}>
                    <Img
                      src={
                        poster_path
                          ? poster_path && imgURL + poster_path
                          : 'https://svgsilh.com/svg/24530-4f4f4f.svg'
                      }
                      alt={title}
                      width={150}
                    />
                    <TitileContainer>
                      <P>{title || name}</P>
                      {/* <Rating>
                        <RatingText>{vote_average.toFixed(1)}</RatingText>
                      </Rating> */}
                    </TitileContainer>
                  </A>
                </SwiperSlide>
              )
            )}
     
        </Swiper>
      </SubContainer>

   
    </Container>
  );
};
export default SliderCard;
