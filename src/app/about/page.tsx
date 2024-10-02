import { Metadata, NextPage } from 'next'

import { Container } from '@mantine/core'
import { AboutView } from '@/components/AboutView/AboutView'
import { getQueryClient } from '@/lib/queryClient'
import { AboutQueryOptions } from '@/lib/api/about/about.query'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

export async function generateMetadata(): Promise<Metadata> {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(AboutQueryOptions)
  const data = queryClient.getQueryData(AboutQueryOptions.queryKey)
  return {
    title: 'Информация о разработчике',
    description: 'персональная страница web-разработчика',
    twitter: {
      title: 'Информация о разработчике',
      description: 'персональная страница web-разработчика',
      images: data?.avatar,
    },
    openGraph: {
      title: 'Информация о разработчике',
      description: 'персональная страница web-разработчика',
      images: data?.avatar,
    },
  }
}

export const revalidate = 10800

const AboutPage: NextPage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(AboutQueryOptions)
  return (
    <Container mb={'1.5rem'}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AboutView />
      </HydrationBoundary>
    </Container>
  )
}

export default AboutPage
