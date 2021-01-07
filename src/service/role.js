/* eslint-disable camelcase */
import cookie from 'js-cookie';
import axios from '../utils/axios';

export const getAllRoles = () => {
  const token = cookie.get('_bt_token');
  const url = '/role';

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const getRoleByID = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/role/${id}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const createRole = ({ name }) => {
  const token = cookie.get('_bt_token');
  const url = '/role';

  return axios.post(url, { name }, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const updateRole = ({
  id, name, role_id, email, password,
}) => {
  const token = cookie.get('_bt_token');
  const url = `/role/${id}`;

  return axios.put(url, {
    name, role_id, email, password,
  }, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.data);
};

export const deleteRole = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/role/${id}`;

  return axios.delete(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};
