import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '9c40587b7d16ffbdc73a57b7c7629b49';

export const fetchTrending = async () => {
  const response = await axios.get(
    `trending/movie/day?api_key=${KEY}&language=en-US`
  );
  const data = response.data.results;
  const mapedData = data.map(({ id, original_title }) => {
    return { id, original_title };
  });
  return mapedData;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&language=en-US`
  );
  const data = response.data.results;
  const mapedData = data.map(({ id, original_title }) => {
    return { id, original_title };
  });
  return mapedData;
};

export const fetchDetails = async id => {
  const response = await axios.get(`movie/${id}?api_key=${KEY}`);
  const data = response.data;
  return data;
};

export const fetchCredits = async id => {
  const response = await axios.get(`movie/${id}/credits?api_key=${KEY}`);
  const data = response.data;
  const mapedData = data.cast.map(
    ({ id, original_name, character, profile_path }) => {
      return {
        id,
        original_name,
        character,
        profile_path,
      };
    }
  );
  return mapedData;
};

export const fetchReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${KEY}`);
  const data = response.data;
  const mapedData = data.results.map(({ id, author, content }) => {
    return {
      id,
      author,
      content,
    };
  });
  return mapedData;
};
