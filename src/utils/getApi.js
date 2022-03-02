import axios from 'axios';

const BASE_URL = 'http://localhost:8000/data';

export const getMainList = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
