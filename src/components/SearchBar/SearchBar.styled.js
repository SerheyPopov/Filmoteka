import { Form, Field } from 'formik';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #eaeaea;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid black;
`;

export const Input = styled(Field)`
  background-color: #eaeaea;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SubmitButton = styled.button`
  display: inline-block;
  width: 64px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    background-color: #505050;
    color: #eaeaea;
  }
`;
