import { SiteNav } from '@/components/portfolio/site-nav'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Foundations } from '@/components/portfolio/foundations'

export default function Page() {
  return (
    <main className="relative min-h-svh bg-background text-foreground">
      <SiteNav />
      <Hero />
      <About />
      <Foundations />
    </main>
  )
}
