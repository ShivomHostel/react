import axios from 'axios';
import BASE_URL from '../../Utils/config';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchData = async (endpoint, token) => {
  try {
    const response = await api.get(endpoint, {
      headers: {
        Authorization: `${token}`,
        // Other headers...
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postData = async (endpoint, token, data) => {
  try {
    const response = await axios.post(BASE_URL + endpoint, data, {
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'multipart/form-data',
        // Other headers...
      },
    });
    console.log('response',response);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};
export const putData = async (endpoint, token, data) => {
  console.log('inputdata', data, token, endpoint);
  try {
    const response = await axios.put(BASE_URL + endpoint, data, {
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'multipart/form-data',
        // Other headers...
      },
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};
export const deleteData = async (endpoint, token) => {
  try {
    console.log('endpoint', endpoint);
    const response = await axios.delete(BASE_URL + endpoint, {
      headers: {
        Authorization: `${token}`,
        // Other headers...
      },
    });
    console.log('response', response);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};
