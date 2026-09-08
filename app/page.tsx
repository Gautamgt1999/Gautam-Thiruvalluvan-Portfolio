import { SiteNav } from '@/components/portfolio/site-nav'
import { Hero } from '@/components/portfolio/hero'
import { Foundations } from '@/components/portfolio/foundations'

export default function Page() {
  return (
    <main className="relative min-h-svh bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Foundations />
    </main>
  )
}
