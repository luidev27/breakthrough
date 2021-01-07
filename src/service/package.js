/* eslint-disable camelcase */
import cookie from 'js-cookie';
import axios from '../utils/axios';

export const getAllPackages = () => {
  const token = cookie.get('_bt_token');
  const url = '/package';

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const getPackageByID = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/package/${id}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const subscribePackage = ({ data }) => {
  const token = cookie.get('_bt_token');
  const url = '/subscribe';

  return axios.post(url, data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const createPackage = ({ name, description }) => {
  const token = cookie.get('_bt_token');
  const url = '/package';

  return axios.post(url, { name, description }, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.data);
};

export const updatePackage = ({ id, name, description }) => {
  const token = cookie.get('_bt_token');
  const url = `/package/${id}`;

  return axios.put(url, {
    name, description,
  }, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.data);
};

export const deletePackage = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/package/${id}`;

  return axios.delete(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};
