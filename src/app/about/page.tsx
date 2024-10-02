import { Metadata, NextPage } from 'next'

import { Container } from '@mantine/core'
import { AboutView } from '@/components/AboutView'
import { getQueryClient } from '@/lib/queryClient'
import { AboutQueryOptions } from '@/lib/api/about/about.query'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
const queryClient = getQueryClient()

export async function generateMetadata(): Promise<Metadata> {
  const data = await queryClient.fetchQuery(AboutQueryOptions)
  return {
    title: 'Информация о разработчике',
    description: 'персональная страница web-разработчика',
    twitter: {
      title: 'Информация о разработчике',
      description: 'персональная страница web-разработчика',
      images: data?.avatar?.formats?.thumbnail?.url,
    },
    openGraph: {
      title: 'Информация о разработчике',
      description: 'персональная страница web-разработчика',
      images: data?.avatar?.formats?.thumbnail?.url,
    },
  }
}

export const revalidate = 10800

const AboutPage: NextPage = async () => {
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
