import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainContainer = styled.div`
  background-color: #012e4a;
  height: 80px;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
`;
export const LogoCont = styled.div`
  position: absolute;
  top: 0;
  left: 150px;
`;
export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  margin-right: 20px;
`;
export const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;
