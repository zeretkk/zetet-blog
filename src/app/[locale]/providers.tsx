'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getQueryClient } from '@/lib/queryClient'
import { MantineProvider } from '@mantine/core'
import {theme} from '@/lib/theme'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { PropsWithChildren } from 'react'

type Props = {
  textFont: NextFontWithVariable,
  headingFont: NextFontWithVariable,
}

export default function Providers({ children, textFont, headingFont }: PropsWithChildren & Props) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme(textFont, headingFont)} defaultColorScheme={'dark'}>
          {children}
        </MantineProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
