/* eslint-disable camelcase */
import cookie from 'js-cookie';
import axios from '../utils/axios';

export const login = ({ email, password }) => axios.post('/auth/login', { email, password }).then((res) => res.data);

export const logout = () => {
  const token = cookie.get('_bt_token');
  const url = '/auth/logout';

  cookie.remove('_bt_token');
  cookie.remove('_bt_profile');
  cookie.remove('_bt_account');
  return axios.delete(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const verifyEmail = ({ id, hash, expires }) => {
  const url = `/email/verify?id=${id}&hash=${hash}&expires=${expires}`;

  axios.get(url).then((res) => res.data);
};

export const resendEmailVerification = ({ email }) => {
  const url = '/email/resend';

  axios.post(url, { email }).then((res) => res.data);
};

export const selectAccount = ({ account_id, token }) => {
  const url = '/auth/select-account';
  return axios.post(url, { account_id }, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};

export const register = ({
  email, password, password_confirmation,
}) => {
  const url = '/register';
  return axios.post(url, {
    email, password, password_confirmation,
  }).then((res) => res.data);
};

export const isAuthenticated = () => cookie.get('_bt_token');

export const parseJwt = (token) => {
  if (!token) return null;
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

export const getProfile = () => {
  const profile = cookie.get('_bt_profile');
  return profile ? JSON.parse(profile) : profile;
};
