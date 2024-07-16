import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.zeret.pw',
  withCredentials: true,
})
