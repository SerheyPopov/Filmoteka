import axios from 'axios';

const API_KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';
const URL = 'https://api.themoviedb.org/';
axios.defaults.baseURL = URL;

export const GetAll = async () => {
  try {
    const server = await axios.get(
      `3/trending/all/day?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data.results;

  } catch (error) {
    console.error(error);
  }
};

export const GetMovies = async () => {
  try {
    const server = await axios.get(
      `3/trending/movie/day?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const GetTv = async () => {
  try {
    const server = await axios.get(
      `3/trending/tv/day?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const TrendPerson = async () => {
  try {
    const server = await axios.get(
      `3/trending/person/day?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const SearchMovie = async onSubmit => {
  try {
    const server = await axios.get(
      `3/search/movie?query=${onSubmit}&api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieInfo = async onSubmitId => {
  try {
    const server = await axios.get(
      `3/movie/${onSubmitId}?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const TvInfo = async onSubmitId => {
  try {
    const server = await axios.get(
      `3/tv/${onSubmitId}?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const PersonInfo = async onSubmitId => {
  try {
    const server = await axios.get(
      `3/person/${onSubmitId}?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieCast = async onSubmitCast => {
  try {
    const server = await axios.get(
      `3/movie/${onSubmitCast}/credits?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieReviews = async onSubmitReviews => {
  try {
    const server = await axios.get(
      `3/movie/${onSubmitReviews}/reviews?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
