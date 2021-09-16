import Api from './axios';
import { LOGIN_URL, USER_URL, ACCOUNT_URL } from './endPonit';

export const loginRequest = data => {
  return Api('post', LOGIN_URL, data.payload, '');
};

export const getDetailsUser = data => {
  return Api('get', `${USER_URL}/${data.idSearch}`, '', '');
};

export const getAccountFromUser = id => {
  return Api('get', `${USER_URL}/${id}${ACCOUNT_URL}`, '', '');
};
