/* eslint-disable camelcase */
import cookie from 'js-cookie';
import axios from '../utils/axios';

export const getAllPermissions = ({ type }) => {
  const token = cookie.get('_bt_token');
  const url = `/permission?type=${type}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const getPermissionByID = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/permission/${id}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};
