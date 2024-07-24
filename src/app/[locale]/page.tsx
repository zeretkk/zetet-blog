'use server'
import { Hero } from '@/components/Hero'
import { setStaticParamsLocale } from 'next-international/server'

export async function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }]
}

export default async function Home({ params: { locale } }: { params: { locale: 'ru' | 'en' } }) {
  setStaticParamsLocale(locale)
  return (
    <main>
      <Hero />
    </main>
  )
}
