import cookie from 'js-cookie';
import axios from '../utils/axios';

export const getAllAccounts = ({ userId }) => {
  const token = cookie.get('_bt_token');
  let url = '/account';

  if (userId) url += `?user_id=${userId}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const getAccountByID = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/account/${id}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const deleteAccount = ({ id, userId }) => {
  const token = cookie.get('_bt_token');
  const url = `/account/${id}?user_id=${userId}`;

  return axios.delete(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};
