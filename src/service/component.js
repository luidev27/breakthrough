/* eslint-disable camelcase */
import cookie from 'js-cookie';
import axios from '../utils/axios';

export const getAllComponents = () => {
  const token = cookie.get('_bt_token');
  const url = '/component';

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const getComponentByID = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/component/${id}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const createComponent = ({ data }) => {
  const token = cookie.get('_bt_token');
  const url = '/component';

  return axios.post(url, data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const updateComponent = ({ data }) => {
  const token = cookie.get('_bt_token');
  const url = '/component';

  return axios.put(url, data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const deleteComponent = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/component/${id}`;

  return axios.delete(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};
