import { BlocksContent } from '@strapi/blocks-react-renderer'

export interface IAllArticleResponse {
  data: IArticleItem[]
  meta: IAllArticleResponseMeta
}

export type IArticleItem = Pick<
  IArticle,
  'id' | 'documentId' | 'title' | 'description' | 'publishedAt' | 'updatedAt'
>

export interface IArticle {
  id: number
  title: string
  description: string
  body: BlocksContent
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  documentId: string
  poster: IArticlePoster
}

export interface IArticlePoster {
  id: number
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: {
    large: IArticlePosterFormat
    small: IArticlePosterFormat
    medium: IArticlePosterFormat
    thumbnail: IArticlePosterFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: Date
  updatedAt: Date
  documentId: string
  locale: null
  publishedAt: Date
}

export interface IArticlePosterFormat {
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

export interface IAllArticleResponseMeta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export interface ISingleArticleResponse {
  data: IArticle
  meta: never
}
