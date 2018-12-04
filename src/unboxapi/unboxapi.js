import axios from 'axios';

// Initialize API instance
const unboxapi = axios.create({
  baseURL: 'https://cors-escape.herokuapp.com/',
  responseType: 'json',
  withCredentials: false,
  crossdomain: true
});

export { unboxapi };
