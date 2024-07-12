import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query'
import { apiClient } from '../apiClient'
import { AllArticleResponse } from './articles.types'

export const ArticlesQueryOptions = infiniteQueryOptions({
  queryKey: ['articles'],
  queryFn: ({ pageParam }) =>
    apiClient
      .get<AllArticleResponse>('/articles', { params: { page: pageParam, perPage: 12 } })
      .then((data) => data.data),
  initialPageParam: 1,
  getNextPageParam: (lastPage) =>
    lastPage.currentPage < lastPage.lastPage ? lastPage.currentPage + 1 : null,
})

export const useArticlesQuery = () => {
  return useInfiniteQuery(ArticlesQueryOptions)
}
