import { MetadataRoute } from 'next'
import { apiClient } from '@/lib/api/apiClient'
import qs from 'qs'
import { IAllArticleResponse } from '@/lib/api/articles/articles.types'
import dayjs from 'dayjs'

const getArticlesUrl = async () => {
  const params = qs.stringify({
    sort: ['createdAt'],
    fields: ['id', 'updatedAt'],
    pagination: {
      pageSize: 100,
    },
    publicationState: 'live',
    locale: ['en'],
  })
  try {
    const articles = await apiClient.get<IAllArticleResponse>(`/articles?${params}`)
    return articles?.data?.data?.map((item) => ({
      url: `${process.env.NEXT_PUBLIC_BASE}/articles/${item.documentId}`,
      lastModified: dayjs(item.publishedAt).toDate(),
    }))
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticlesUrl()
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: `${process.env.NEXT_PUBLIC_BASE}/ru`,
          en: `${process.env.NEXT_PUBLIC_BASE}/en`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: `${process.env.NEXT_PUBLIC_BASE}/ru/about`,
          en: `${process.env.NEXT_PUBLIC_BASE}/en/about`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE}/articles`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: `${process.env.NEXT_PUBLIC_BASE}/ru/articles`,
          en: `${process.env.NEXT_PUBLIC_BASE}/en/articles`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE}/tools`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: `${process.env.NEXT_PUBLIC_BASE}/ru/tools`,
          en: `${process.env.NEXT_PUBLIC_BASE}/en/tools`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE}/tools/boxshadow`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: `${process.env.NEXT_PUBLIC_BASE}/ru/tools/boxshadow`,
          en: `${process.env.NEXT_PUBLIC_BASE}/en/tools/boxshadow`,
        },
      },
    },
    ...articles,
  ]
}
