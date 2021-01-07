/* eslint-disable camelcase */
import cookie from 'js-cookie';
import axios from '../utils/axios';

export const getAllComments = () => {
  const token = cookie.get('_bt_token');
  const url = '/comment';

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const getCommentByID = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/comment/${id}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const createComment = ({ data }) => {
  const token = cookie.get('_bt_token');
  const url = '/comment';

  return axios.post(url, data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const updateComment = ({ id, data }) => {
  const token = cookie.get('_bt_token');
  const url = `/comment/${id}`;

  return axios.put(url, data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const deleteComment = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/comment/${id}`;

  return axios.delete(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};
