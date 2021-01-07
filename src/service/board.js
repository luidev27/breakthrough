/* eslint-disable camelcase */
import cookie from 'js-cookie';
import axios from '../utils/axios';

export const getAllBoards = ({ per_page }) => {
  const token = cookie.get('_bt_token');
  const url = `/board?per_page=${per_page}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const getBoardByID = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/board/${id}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const createBoard = ({ name, description }) => {
  const token = cookie.get('_bt_token');
  const url = '/board';

  return axios.post(url, { name, description }, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.data);
};

export const updateBoard = ({ id, name, description }) => {
  const token = cookie.get('_bt_token');
  const url = `/board/${id}`;

  return axios.put(url, {
    name, description,
  }, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.data);
};

export const deleteBoard = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/board/${id}`;

  return axios.delete(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};
