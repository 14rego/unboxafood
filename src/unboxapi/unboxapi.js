import axios from 'axios';

// Initialize API instance
const unboxapi = axios.create({
  baseURL: '/api/1.0.0',
  timeout: 2000,
  headers: { 'X-Api-Key': 'blah' }
});

export { unboxapi };
