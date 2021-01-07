/* eslint-disable camelcase */
import cookie from 'js-cookie';
import axios from '../utils/axios';

export const getAllModules = ({ board_id }) => {
  const token = cookie.get('_bt_token');
  const url = `/module?board_id=${board_id}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const getModuleByID = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/module/${id}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const createModule = ({ id, data }) => {
  const token = cookie.get('_bt_token');
  const url = `/module/${id}`;

  return axios.post(url, data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const updateModule = ({ id, data }) => {
  const token = cookie.get('_bt_token');
  const url = `/module/${id}`;

  return axios.put(url, data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const deleteModule = ({ id, user_id, account_id }) => {
  const token = cookie.get('_bt_token');
  const url = `/module/${id}?user_id=${user_id}&account_id=${account_id}`;

  return axios.delete(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};
