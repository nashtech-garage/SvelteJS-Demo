import axios from 'axios';
import { PUBLIC_PRODUCT_API_ENDPOINT, PUBLIC_API_KEY } from '$env/static/public';
const axiosAPI = axios.create({
  baseURL: PUBLIC_PRODUCT_API_ENDPOINT
});

const apiRequest = (method: string, url: string, request: any) => {
  const headers = {
    'content-type': 'application/json',
    'x-hasura-admin-secret': PUBLIC_API_KEY
  };

  return axiosAPI({
    method,
    url,
    data: request,
    headers
  })
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const get = (url: string, request?: any) => apiRequest('get', url, request);

const deleteRequest = (url: string, request?: any) => apiRequest('delete', url, request);

const post = (url: string, request?: any) => apiRequest('post', url, request);

const put = (url: string, request?: any) => apiRequest('put', url, request);

const patch = (url: string, request?: any) => apiRequest('patch', url, request);

const API = {
  get,
  delete: deleteRequest,
  post,
  put,
  patch
};
export default API;
