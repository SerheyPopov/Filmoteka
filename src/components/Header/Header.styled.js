import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainContainer = styled.div`
  background-color: #012e4a;
  height: 80px;
  display: flex;
  margin-bottom: 30px;
  justify-content: space-around;
  align-items: center;
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
  &:hover{
    color: red;
  }
`;