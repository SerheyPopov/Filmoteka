import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CastContainer = styled.div`
  max-width: 700px;
`;

export const Item = styled.li`
  width: 200px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const P = styled.p`
  font-size: larger;
  text-align: center;
  font-weight: 500;
`;
