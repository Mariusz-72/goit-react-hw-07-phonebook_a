import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://659803f8668d248edf23e9f6.mockapi.io/contacts/',
});

export const selectContacts = async () => {
  const data = await instance.get('/');
  return data;
};
