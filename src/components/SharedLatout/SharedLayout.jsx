import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Main  } from './SharedLayout.styled';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header/>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
export default SharedLayout;
