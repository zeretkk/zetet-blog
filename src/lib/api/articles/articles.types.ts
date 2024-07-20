import { PublicUserData } from '@/lib/api/user/user.types'
import { BlocksContent } from '@strapi/blocks-react-renderer'

export type Article = {
  id: number
  attributes: ArticleAttributes
}
export type ArticleAttributes = {
  title: string
  description: string
  body: BlocksContent
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  author: Author
  tags: Tags
  poster?: {
    data: Poster
  }
}
export type Author = {
  data: {
    id: number
    attributes: Pick<PublicUserData['attributes'], 'firstname'>
  }
}

export type Tags = {
  data: {
    id: number
    attributes: { name: string }
  }[]
}

export type AllArticleResponse = {
  data: Exclude<Article, 'poster'>[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
export type Poster = {
  id: 3
  attributes: {
    name: string
    alternativeText?: string
    caption?: string
    width: number
    height: number
    formats: {
      small: PosterFormat
      medium: PosterFormat
      thumbnail: PosterFormat
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: number
    previewUrl: null
    provider: string
    provider_metadata: null
    createdAt: string
    updatedAt: string
  }
}

export type PosterFormat = {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export type SingeArticleResponse = {
  data: Article
  meta: Record<string, any>
}
