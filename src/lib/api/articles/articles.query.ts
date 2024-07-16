import {
  infiniteQueryOptions,
  queryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query'
import { apiClient } from '../apiClient'
import { AllArticleResponse, Article } from './articles.types'

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

export const ArticleByIdQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ['article', id],
    queryFn: () => apiClient.get<Article>(`/articles/${id}`).then((data) => data.data),
  })

export const useArticlesQuery = () => {
  return useInfiniteQuery(ArticlesQueryOptions)
}
export const useArticleByIdQuery = (id: number) => {
  return useQuery(ArticleByIdQueryOptions(id))
}
