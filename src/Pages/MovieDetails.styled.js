import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const GoBack = styled(Link)`
  text-decoration: none;
  font-size: larger;
  font-weight: 700;
  color: #6a6a6a;
  &:hover {
    color: black;
  }
`;

export const Cast = styled(NavLink)`
  text-decoration: none;
  font-size: larger;
  font-weight: 700;
  color: #6a6a6a;
  margin: 0 40px;
  &:hover {
    color: black;
  }
  &.active {
    color: orangered;
  }
`;

export const Review = styled(NavLink)`
  text-decoration: none;
  font-size: larger;
  font-weight: 700;
  color: #6a6a6a;
  &:hover {
    color: black;
  }
  &.active {
    color: orangered;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;
