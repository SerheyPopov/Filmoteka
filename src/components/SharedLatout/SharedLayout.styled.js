import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Header = styled.header``;

export const Nav = styled.nav`
  margin-bottom: 30px;
  background-color: #4f4f4f;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  padding: 0 30px;
`;
