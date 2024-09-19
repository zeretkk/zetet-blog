import {
  infiniteQueryOptions,
  queryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query'
import { apiClient } from '../apiClient'
import { IAllArticleResponse, ISingleArticleResponse } from './articles.types'
import { useCurrentLocale } from '@/locales/client'

export const getArticlesQueryOptions = (locale: 'ru' | 'en' = 'ru') =>
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

export const ArticleByIdQueryOptions = (id: string, locale: 'ru' | 'en') =>
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
            locale,
          },
        })
        .then(({ data }) => data.data),
  })

export const useArticlesQuery = () => {
  const locale = useCurrentLocale()
  return useInfiniteQuery(getArticlesQueryOptions(locale))
}
export const useArticleByIdQuery = (id: string, locale: 'ru' | 'en') => {
  return useQuery(ArticleByIdQueryOptions(id, locale))
}
