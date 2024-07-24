import { ArticleList } from '@/components/ArticleList'
import { getArticlesQueryOptions } from '@/lib/api/articles/articles.query'
import { getQueryClient } from '@/lib/queryClient'
import { getCurrentLocale, getI18n, getScopedI18n } from '@/locales/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Metadata, NextPage } from 'next'
import { Alert, Container, Title } from '@mantine/core'
import { IconExclamationCircle } from '@tabler/icons-react'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('meta.blog')

  return {
    title: t('title'),
    description: t('description'),
  }
}

const BlogPage: NextPage = async () => {
  const t = await getI18n()
  const locale = getCurrentLocale()
  const queryClient = getQueryClient()
  await queryClient.prefetchInfiniteQuery(getArticlesQueryOptions(locale))
  return (
    <Container mih={'100dvh'}>
      <Title my={'md'} order={1}>
        {t('header.blog')}
      </Title>
      {locale !== 'ru' && (
        <Alert icon={<IconExclamationCircle />} color={'green'}>
          Not all content in this section may be available in English
        </Alert>
      )}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ArticleList />
      </HydrationBoundary>
    </Container>
  )
}

export default BlogPage
