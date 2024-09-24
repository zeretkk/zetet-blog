import {
  infiniteQueryOptions,
  queryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query'
import { apiClient } from '../apiClient'
import { IAllArticleResponse, ISingleArticleResponse } from './articles.types'

export const getArticlesQueryOptions = () =>
  infiniteQueryOptions({
    queryKey: ['articles'],
    queryFn: ({ pageParam }) =>
      apiClient
        .get<IAllArticleResponse>('/articles', {
          params: {
            pagination: {
              page: pageParam,
              pageSize: 12,
            },
            populate: {
              tags: {
                fields: 'name',
              },
            },
            fields: ['title', 'description', 'publishedAt', 'updatedAt'],
            locale: 'ru',
          },
        })
        .then((data) => data.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.meta.pagination.page < lastPage.meta.pagination.pageCount
        ? lastPage.meta.pagination.page + 1
        : null,
  })

export const ArticleByIdQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ['article', id],
    queryFn: () =>
      apiClient
        .get<ISingleArticleResponse>(`/articles/${id}`, {
          params: {
            populate: {
              author: {
                fields: 'firstname',
              },
              tags: {
                fields: 'name',
              },
              poster: true,
            },
            locale: 'ru',
          },
        })
        .then(({ data }) => data.data),
  })

export const useArticlesQuery = () => {
  return useInfiniteQuery(getArticlesQueryOptions())
}
export const useArticleByIdQuery = (id: string) => {
  return useQuery(ArticleByIdQueryOptions(id))
}
