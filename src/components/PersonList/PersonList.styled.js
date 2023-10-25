import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const A = styled(Link)`
  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
`;

export const Item = styled.li`
  width: 300px;
  margin-right: auto;
  margin-left: auto;
//   border: 1px solid black;
  margin-bottom: 20px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 5px;
  &:hover {
    transform: scale(1.03);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
`;
export const Img = styled.img`
  display: block;
`;

export const P = styled.p`
  font-size: x-large;
  font-weight: 700;
  color: #656565;
`;

export const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #f9f7f7;
`;
