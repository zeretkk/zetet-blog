import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://back.zeret.pw/api',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
})
