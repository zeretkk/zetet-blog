import { MetadataRoute } from 'next'
import { apiClient } from '@/lib/api/apiClient'
import qs from 'qs'
import { AllArticleResponse } from '@/lib/api/articles/articles.types'
import dayjs from 'dayjs'

const getArticles = async () => {
  const params = qs.stringify({
    sort: ['createdAt'],
    fields: ['id', 'updatedAt'],
    pagination: {
      pageSize: 100,
    },
    publicationState: 'live',
    locale: ['en'],
  })
  return apiClient.get<AllArticleResponse>(`/articles?${params}`)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles()
  console.log(articles.data.data)
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
    ...articles.data?.data?.map((item) => ({
      url: `${process.env.NEXT_PUBLIC_BASE}/articles/${item.id}`,
      lastModified: dayjs(item.attributes.createdAt).toDate(),
    })),
  ]
}
