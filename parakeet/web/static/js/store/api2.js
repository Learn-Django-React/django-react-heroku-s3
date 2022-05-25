import axios from 'axios';

const api2 = axios.create({
  baseURL: '',
  withCredentials: true,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data; boundary=arbitrarystring',
  },
});

export default api2;
