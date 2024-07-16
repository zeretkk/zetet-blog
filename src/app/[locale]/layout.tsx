import type { Metadata } from 'next'
import { JetBrains_Mono, Source_Serif_4, Rubik } from 'next/font/google'
import './globals.scss'
import '@mantine/core/styles.css';
import { Header } from '@/components'
import { Footer } from '@/components'
import { I18nProviderClient } from '@/locales/client'
import { getScopedI18n } from '@/locales/server'
import Providers from './providers'
import { ColorSchemeScript } from '@mantine/core'

const heading = Rubik({ subsets: ['latin', 'cyrillic'], variable: '--heading' })
const jbMono = JetBrains_Mono({ subsets: ['cyrillic', 'latin'], variable: '--jbMono' })
const sourceSerif = Source_Serif_4({ subsets: ['latin', 'cyrillic'], variable: '--sourceSans' })

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('meta.main')
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE ?? 'https://zeret.pw'),
    title: {
      // absolute: 'zeRET | web-dev',
      template: 'zeRET | %s',
      default: 'zeRET',
    },
    description: t('description'),
    creator: 'zeret',
    publisher: 'zeret',
    openGraph: {
      title: {
        template: 'zeRET | %s',
        default: 'zeRET',
      },
      description: t('description'),
      images: '/codeSych.png',
    },
    twitter: {
      title: {
        template: 'zeRET | %s',
        default: 'zeRET',
      },
      description: t('description'),
      images: '/codeSych.png',
    },
  }
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  params: { locale: string }
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
    <head>
      <ColorSchemeScript defaultColorScheme={'dark'}/>
    </head>
      <body className={`${heading.variable} ${sourceSerif.variable} ${jbMono.variable}`}>
        <I18nProviderClient locale={locale}>
          <Providers headingFont={heading} textFont={jbMono}>
            <Header />
              {children}
            <Footer />
          </Providers>
        </I18nProviderClient>
      </body>
    </html>
  )
}
