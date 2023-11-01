import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top:20px;
  position: relative;
  // outline: 1px solid red;
`;
export const SubContainer = styled.div`
  width: 80vw;
  position: relative;
  // outline: 1px solid red;
`;


export const A = styled(Link)`
  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
`;


export const Img = styled.img`
  display: block;
`;
export const TitileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid grey;
  height: 50px;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
  ;
export const P = styled.p`
  font-size: small;
  font-weight: 700;
  color: #656565;
`;



// export const Rating = styled.div`
//   position: absolute;
//   width: 50px;
//   height: 50px;
//   border-radius: 25px;
//   background-color: #453c41;
//   top: -60px;
//   left: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const RatingText = styled.p`
//   color: #d4dbe2;
//   font-size: x-large;
//   font-weight: 700;
// `;
