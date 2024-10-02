import { queryOptions, useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api/apiClient'
import qs from 'qs'
import { IAboutResponse } from '@/lib/api/about/about.types'

export const AboutQueryOptions = queryOptions({
  queryKey: ['about'],
  queryFn: () => {
    const params = qs.stringify({
      populate: {
        avatar: true,
        projects: {
          populate: ['preview'],
        },
      },
    })
    return apiClient.get<IAboutResponse>(`/about?${params}`).then(({ data }) => data.data)
  },
})

export const useAboutQuery = () => useQuery(AboutQueryOptions)
