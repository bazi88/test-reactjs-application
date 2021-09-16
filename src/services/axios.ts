import axios from 'axios';

export const BASE_URL = 'https://reqres.in/';
export const BASE_URL_TEST = 'https://sample-accounts-api.herokuapp.com/';

const Api = (method, url, dataPost, params) => {
  method = method || 'GET';
  url = url || BASE_URL;
  dataPost = dataPost || {};
  params = params || {};
  axios.defaults.baseURL = BASE_URL;

  axios.defaults.headers.common['Authorization'] =
    localStorage.getItem('token');

  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';

  //Call api in here
  return axios({
    method,
    params,
    url,
    data: dataPost,
  }).then(function (response) {
    if (response && response.status === 200) {
      return response.data;
    }
  });
};

export default Api;
