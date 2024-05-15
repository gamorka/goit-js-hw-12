import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43842953-9dbca6afb64f09675f00184b1';

export const fetchImages = async (searchValue = '', page = 1, perPage = 15) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
        searchValue
      )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};