import axios from 'axios'

const api = axios.create({
  baseURL: process.server ? process.env.API_URL: process.env.BROWSER_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default api;
