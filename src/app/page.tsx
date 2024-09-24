'use server'
import { Hero } from '@/components/Hero'
import { notFound } from 'next/navigation'

export default async function Home() {
  notFound()
  return (
    <main>
      <Hero />
    </main>
  )
}
