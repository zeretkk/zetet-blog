import type { Metadata } from 'next'
import { ColorSchemeScript } from '@mantine/core'
import Providers from '@/app/providers'
import '@mantine/core/styles.css'
import './globals.scss'
import { JetBrains_Mono, Rubik, Source_Serif_4 } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE ?? 'https://zeret.pw'),
    title: {
      // absolute: 'zeRET | web-dev',
      template: 'zeRET | %s',
      default: 'zeRET',
    },
    description: 'персональная страница web-разработчика',
    creator: 'zeret',
    publisher: 'zeret',
    openGraph: {
      title: {
        template: 'zeRET | %s',
        default: 'zeRET',
      },
      description: 'персональная страница web-разработчика',
      images: '/codeSych.png',
    },
    twitter: {
      title: {
        template: 'zeRET | %s',
        default: 'zeRET',
      },
      description: 'персональная страница web-разработчика',
      images: '/codeSych.png',
    },
  }
}

const heading = Rubik({ subsets: ['latin', 'cyrillic'], variable: '--heading' })
const jbMono = JetBrains_Mono({ subsets: ['cyrillic', 'latin'], variable: '--jbMono' })
const sourceSerif = Source_Serif_4({ subsets: ['latin', 'cyrillic'], variable: '--sourceSans' })

export default function RootLayout({
  children,
}: Readonly<{
  params: { locale: string }
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript defaultColorScheme={'dark'} />
      </head>
      <body className={`${heading.variable} ${sourceSerif.variable} ${jbMono.variable}`}>
        <Providers headingFont={heading} textFont={jbMono}>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
