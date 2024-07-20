import {
  infiniteQueryOptions,
  queryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query'
import { apiClient } from '../apiClient'
import { AllArticleResponse, SingeArticleResponse } from './articles.types'
import { useCurrentLocale } from '@/locales/client'

export const getArticlesQueryOptions = (locale: 'ru' | 'en' = 'ru') =>
  infiniteQueryOptions({
    queryKey: ['articles'],
    queryFn: ({ pageParam }) =>
      apiClient
        .get<AllArticleResponse>('/articles', {
          params: {
            pagination: {
              page: pageParam,
              pageSize: 12,
            },
            populate: {
              author: {
                fields: 'firstname',
              },
              tags: {
                fields: 'name',
              },
            },
            locale: locale,
          },
        })
        .then((data) => data.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.meta.pagination.page < lastPage.meta.pagination.pageCount
        ? lastPage.meta.pagination.page + 1
        : null,
  })

export const ArticleByIdQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ['article', id],
    queryFn: () =>
      apiClient
        .get<SingeArticleResponse>(`/articles/${id}`, {
          params: {
            populate: {
              author: {
                fields: 'firstname',
              },
              tags: {
                fields: 'name',
              },
            },
          },
        })
        .then(({ data }) => data.data),
  })

export const useArticlesQuery = () => {
  const locale = useCurrentLocale()
  return useInfiniteQuery(getArticlesQueryOptions(locale))
}
export const useArticleByIdQuery = (id: number) => {
  return useQuery(ArticleByIdQueryOptions(id))
}
