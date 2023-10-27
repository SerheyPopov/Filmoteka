import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';

export const TCont = styled.div`
  display: flex;
`;
export const BgCont = styled.div`
  width: 100vw;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const GoBack = styled(NavLink)`
  width: 50px;
  height: 50px;
  top: 30px;
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7b7c81;
  border-radius: 50%;
  position: absolute;

  &:hover {
    background: #f6f4f5;
    box-shadow: rgba(255, 255, 255, 0.12) 2px 4px 8px 2px,
      rgba(255, 255, 255, 0.32) 2px 4px 32px 2px;
  }
`;
export const GoBackSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: #d4dbe2;
  ${GoBack}:hover & {
    fill: red;
  }
`;

export const Container = styled.div`
  padding: 0 120px;
  position: relative;
`;
export const TagLine = styled.p`
  color: #f6f4f5;

  line-height: 1;
  margin-bottom: 20px;
`;
export const StarsContainer = styled.div`
  position: relative;
  font-size: 40px;
  align-items: center;

  &::before {
    content: '★★★★★★★★★★';
    color: #9aa8a8;
    display: block;
  }
`;
export const StarsCo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.$rate}%;
  overflow: hidden;
  &::before {
    content: '★★★★★★★★★★';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: red;
  }
`;
export const Star = styled.svg`
  outline: 1px solid red;
  width: 36px;
  height: 36px;
  fill: none;
  stroke: blue;
`;
export const ImgCont = styled.div`
  box-shadow: rgba(255, 255, 255, 0.12) 2px 4px 8px 2px,
    rgba(255, 255, 255, 0.32) 2px 4px 32px 2px;
  margin-right: 50px;
  margin-top: 30px;
  border-radius: 10px;
`;

export const Img = styled.img`
  border-radius: 10px;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  margin-top: 100px;
  color: #f6f4f5;
`;

export const RatingCont = styled.div`
  display: flex;
  align-items: center;
 margin-bottom:20px;
`;
export const Rating = styled.p`
  font-size: larger;
  font-weight: bold;
  color: #f6f4f5;
  margin-right: 10px;
`;
export const DiscrCont = styled.div`
  display: flex;

  `;

export const GenresList = styled.ul`
  display: flex;
  margin-bottom: 10px;
  font-size: larger;
  font-weight: 700;
  color: #f6f4f5;
`;
export const Item = styled.li`
  margin-right: 5px;
  &:not(:first-of-type) {
    &::before {
      content: ',';
      color: #f6f4f5;
      margin-right: 5px;
    }
  }
`;
export const TimeCont = styled.div`
  display: flex;
  margin-left: 5px;
  font-size: larger;
  font-weight: 700;
  color: #f6f4f5;
  &::before {
    content: '•';
    color: #f6f4f5;
    margin-right: 5px;
  }
`;
export const Overview = styled.h2`
  margin-bottom: 10px;
  color: #f6f4f5;
`;
export const OverviewText = styled.p`
  margin-bottom: 10px;
  font-size: larger;
  font-weight: 700;
  color: #f6f4f5;
`;
