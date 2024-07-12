'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getQueryClient } from '@/lib/queryClient'
import { SkeletonTheme } from 'react-loading-skeleton'

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor='#44475a' highlightColor='#6272a4'>
        {children}
      </SkeletonTheme>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
