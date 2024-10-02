import { BlocksContent } from '@strapi/blocks-react-renderer'
import { IImageEntry } from '@/lib/api/commonTypes/strapi.types'

export interface IAboutResponse {
  data: {
    id: number
    documentId: string
    name: string
    position: string
    familar: string
    also: string
    bio?: BlocksContent
    hobby?: BlocksContent
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    locale: string
    avatar?: IImageEntry
    projects?: IPortfolioProject[]
  }
  meta: never
}

export interface IPortfolioProject {
  id: number
  documentId: string
  title: string
  position: string
  description: string
  tech: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
  preview?: IImageEntry
}
