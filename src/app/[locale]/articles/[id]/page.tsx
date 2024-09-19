import { Metadata, NextPage } from 'next'
import { getQueryClient } from '@/lib/queryClient'
import { notFound } from 'next/navigation'
import { ArticleByIdQueryOptions } from '@/lib/api/articles/articles.query'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { ArticleView } from '@/components/ArticleView/ArticleView'
import { Container } from '@mantine/core'

type Props = {
  params: {
    id: string
  }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const articleId = parseInt(params.id)
  if (isNaN(articleId)) {
    return {
      title: 'NotFoundError',
    }
  }
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(ArticleByIdQueryOptions(articleId))
  const data = queryClient.getQueryData(ArticleByIdQueryOptions(articleId).queryKey)
  if (!data) {
    return {
      title: 'NotFoundError',
    }
  }
  return {
    title: data.attributes.title,
    description: data.attributes.description,
    authors: data.attributes?.author?.data?.attributes
      ? [{ name: data.attributes?.author?.data.attributes.firstname }]
      : undefined,
    twitter: {
      title: data.attributes.title,
      // images: data.attributes.posterUrl,
      description: data.attributes.description,
    },
    openGraph: {
      title: data.attributes.title,
      // images: data.attributes.posterUrl,
      description: data.attributes.description,
    },
  }
}

const ArticlePage: NextPage<Props> = async ({ params: { id } }) => {
  const articleId = parseInt(id)
  if (isNaN(articleId)) {
    notFound()
  }
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(ArticleByIdQueryOptions(articleId))
  if (!queryClient.getQueryData(ArticleByIdQueryOptions(articleId).queryKey)) {
    notFound()
  }

  return (
    <Container>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ArticleView id={articleId} />
      </HydrationBoundary>
    </Container>
  )
}
export default ArticlePage
