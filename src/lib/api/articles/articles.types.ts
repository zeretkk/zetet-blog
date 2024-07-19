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
}
export type Author = {
  data: {
    id: number
    attributes: Pick<PublicUserData['attributes'], 'firstname'>
  }
}

export type Body = {
  type: string
  children: Child[]
  level?: number
}

export type Child = {
  bold?: boolean
  text: string
  type: string
  italic?: boolean
  underline?: boolean
}

export type Tags = {
  data: {
    id: number
    attributes: { name: string }
  }[]
}

export type AllArticleResponse = {
  data: Article[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export type SingeArticleResponse = {
  data: Article
  meta: Record<string, any>
}
