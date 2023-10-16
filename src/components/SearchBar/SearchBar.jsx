import { Formik } from 'formik';

import { SearchForm, Input, SubmitButton, Container } from './SearchBar.styled';

const Searchbar = ({ onSubmit }) => {
  
  const hendleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Container>
      <Formik initialValues={{ search: '' }} onSubmit={hendleSubmit}>
        <SearchForm>
          <Input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <SubmitButton type='submit'>Search</SubmitButton>
        </SearchForm>
      </Formik>
    </Container>
  );
};
export default Searchbar;

