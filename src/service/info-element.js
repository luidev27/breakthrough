/* eslint-disable camelcase */
import cookie from 'js-cookie';
import axios from '../utils/axios';

export const getAllInfoElements = ({ component_id }) => {
  const token = cookie.get('_bt_token');
  const url = `/information-element?component_id=${component_id}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const getInfoElementByID = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/information-element/${id}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const createInfoElement = ({ data }) => {
  const token = cookie.get('_bt_token');
  const url = '/infomation-element';

  return axios.post(url, data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const updateInfoElement = ({ id, data }) => {
  const token = cookie.get('_bt_token');
  const url = `/information-element/${id}`;

  return axios.put(url, data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const deleteInfoElement = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/information-element/${id}`;

  return axios.delete(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};
