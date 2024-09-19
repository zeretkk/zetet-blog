import { Metadata, NextPage } from 'next'
import { getQueryClient } from '@/lib/queryClient'
import { notFound } from 'next/navigation'
import { ArticleByIdQueryOptions } from '@/lib/api/articles/articles.query'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { ArticleView } from '@/components/ArticleView/ArticleView'
import { Container } from '@mantine/core'
import { getCurrentLocale } from '@/locales/server'

type Props = {
  params: {
    id: string
  }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const queryClient = getQueryClient()
  const locale = getCurrentLocale()
  await queryClient.prefetchQuery(ArticleByIdQueryOptions(params.id, locale))
  const data = queryClient.getQueryData(ArticleByIdQueryOptions(params.id, locale).queryKey)
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
      // images: data.attributes.posterUrl,
      description: data.description,
    },
    openGraph: {
      title: data.title,
      // images: data.attributes.posterUrl,
      description: data.description,
    },
  }
}

const ArticlePage: NextPage<Props> = async ({ params: { id } }) => {
  const queryClient = getQueryClient()
  const locale = getCurrentLocale()
  await queryClient.prefetchQuery(ArticleByIdQueryOptions(id, locale))
  if (!queryClient.getQueryData(ArticleByIdQueryOptions(id, locale).queryKey)) {
    notFound()
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
