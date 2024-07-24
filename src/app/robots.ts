import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/dashboard/', '*?page=*'],
      },
    ],
    sitemap: process.env.NEXT_PUBLIC_BASE + '/sitemap.xml',
  }
}
