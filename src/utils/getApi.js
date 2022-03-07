import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const getMainList = async () => {
  const response = await axios.get(`${BASE_URL}/data`);
  return response.data;
};

export const getUserList = async () => {
  const response = await axios.get(`${BASE_URL}/user`);
  return response.data;
};
