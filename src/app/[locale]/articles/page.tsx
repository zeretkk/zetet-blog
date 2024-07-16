import { ArticleList } from '@/components'
import { ArticlesQueryOptions } from '@/lib/api/articles/articles.query'
import { getQueryClient } from '@/lib/queryClient'
import { getI18n, getScopedI18n } from '@/locales/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Metadata, NextPage } from 'next'
import { Container } from '@mantine/core'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('meta.blog')
  return {
    title: t('title'),
    description: t('description'),
  }
}

const BlogPage: NextPage = async () => {
  const t = await getI18n()
  const queryClient = getQueryClient()
  await queryClient.prefetchInfiniteQuery(ArticlesQueryOptions)
  return (
    <Container mih={'100dvh'}>
      <h1>{t('header.blog')}</h1>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ArticleList />
        </HydrationBoundary>
    </Container>
  )
}

export default BlogPage
