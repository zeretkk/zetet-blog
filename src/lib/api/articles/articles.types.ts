import { PublicUserData } from '@/lib/api/user/user.types'

export type Article = {
  id: number
  created_at: string
  edited_at: string
  title: string
  description: string
  body: string
  authorId: number
  deleted?: boolean
  deleted_at?: string
  deletedReason?: string
  posterUrl?: string
  tags: {
    articleId: number
    tagId: number
    tag: {
      id: number
      title: string
    }
  }[]
  author: Pick<PublicUserData, 'id' | 'username' | 'group' | 'lastOnline'>
}

export type AllArticleResponse = {
  data: Article[]
  count: number
  lastPage: number
  currentPage: number
}

export type CreateArticleDto = {
  posterUrl?: string
  title: string
  description: string
  body: string
  tags?: string[]
}
