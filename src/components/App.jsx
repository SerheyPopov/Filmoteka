import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLatout/SharedLayout';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const FilmInfo = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Show = lazy(() => import('../Pages/Show'));
const People = lazy(() => import('../Pages/People'));
const Favorite = lazy(() => import('../Pages/Favorite'));



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tvshow" element={<Show />} />
        <Route path="people" element={<People />} />
        <Route path="favorite" element={<Favorite />} />

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
