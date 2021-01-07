/* eslint-disable camelcase */
import cookie from 'js-cookie';
import axios from '../utils/axios';

export const getAllUsers = () => {
  const token = cookie.get('_bt_token');
  const url = '/user';

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const getUserByID = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/user/${id}`;

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const createUser = ({
  user_name, role_id, email, password,
}) => {
  const token = cookie.get('_bt_token');
  const url = '/user';

  return axios.post(url, {
    user_name,
    email,
    password,
    role_id: role_id || '',
  }, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.data);
};

export const deleteUser = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/user/${id}`;

  return axios.delete(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const updateUserStatus = ({ id }) => {
  const token = cookie.get('_bt_token');
  const url = `/user/update-status/${id}`;

  return axios.patch(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const inviteUser = ({
  user_name, email, role_id, board_id,
}) => {
  const token = cookie.get('_bt_token');
  const url = '/user/invite';

  return axios.post(url, {
    user_name,
    email,
    board_id,
    role_id,
  }, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.data);
};
