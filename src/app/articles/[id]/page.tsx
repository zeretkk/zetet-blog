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
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(ArticleByIdQueryOptions(params.id))
  const data = queryClient.getQueryData(ArticleByIdQueryOptions(params.id).queryKey)
  if (!data) {
    return {
      title: 'NotFoundError',
    }
  }
  return {
    title: data.title,
    description: data.description,
    // authors: data.attributes?.author?.data?.attributes
    //   ? [{ name: data.attributes?.author?.data.attributes.firstname }]
    //   : undefined,
    twitter: {
      title: data.title,
      images: data?.poster?.formats?.thumbnail.url,
      description: data.description,
    },
    openGraph: {
      title: data.title,
      images: data?.poster?.formats?.thumbnail.url,
      description: data.description,
    },
  }
}

const ArticlePage: NextPage<Props> = async ({ params: { id } }) => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(ArticleByIdQueryOptions(id))
  if (!queryClient.getQueryData(ArticleByIdQueryOptions(id).queryKey)) {
    return notFound()
  }

  return (
    <Container>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ArticleView id={id} />
      </HydrationBoundary>
    </Container>
  )
}
export default ArticlePage
