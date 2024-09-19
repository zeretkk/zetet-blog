import axios from 'axios'

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APU_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
})
