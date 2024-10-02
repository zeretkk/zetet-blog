import { ArticleList } from '@/components/ArticleList'
import { getArticlesQueryOptions } from '@/lib/api/articles/articles.query'
import { getQueryClient } from '@/lib/queryClient'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Metadata, NextPage } from 'next'
import { Container, Title } from '@mantine/core'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Блог',
    description: 'Мысли разработчика',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE}/articles`,
    },
  }
}

const BlogPage: NextPage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchInfiniteQuery(getArticlesQueryOptions())
  return (
    <Container mih={'100dvh'}>
      <Title my={'md'} order={1}>
        Блог
      </Title>
      {/*{locale !== 'ru' && (*/}
      {/*  <Alert icon={<IconExclamationCircle />} color={'green'}>*/}
      {/*    Not all content in this section may be available in English*/}
      {/*  </Alert>*/}
      {/*)}*/}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ArticleList />
      </HydrationBoundary>
    </Container>
  )
}

export default BlogPage
