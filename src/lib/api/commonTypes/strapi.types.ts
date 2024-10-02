export interface IImageEntry {
  id: number
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: {
    large: IFormat
    small: IFormat
    medium: IFormat
    thumbnail: IFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: string
  updatedAt: string
  documentId: string
  locale: null
  publishedAt: string
}
interface IFormat {
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
