import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLatout/SharedLayout';

const Home = lazy(() => import('../Pages/Home'));
const FilmInfo = lazy(() => import('../Pages/MovieDetails'));
const PersonInfo = lazy(() => import('../components/Person/Person'));

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Show = lazy(() => import('../Pages/Show'));
const People = lazy(() => import('../Pages/People'));
const Favorite = lazy(() => import('../Pages/Favorite'));
const SearchMovie = lazy(() =>
  import('../components/SearchMovies/SearchMovies')
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tv" element={<Show />} />
        <Route path="people" element={<People />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="search" element={<SearchMovie />} />

        <Route path="person/:personId" element={<PersonInfo />} />

        <Route path="tv/:filmId" element={<FilmInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="movies/:filmId" element={<FilmInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<div>error</div>} />
    </Routes>
  );
};

export default App;
