import '../globals.scss'
import '@mantine/core/styles.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { I18nProviderClient } from '@/locales/client'

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  params: { locale: string }
  children: React.ReactNode
}>) {
  return (
    <I18nProviderClient locale={locale}>
      <Header />
      {children}
      <Footer />
    </I18nProviderClient>
  )
}
