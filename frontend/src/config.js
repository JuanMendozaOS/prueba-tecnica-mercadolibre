import axios from 'axios'
export function createAxiosInstance() {
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
  })

  return instance;
}