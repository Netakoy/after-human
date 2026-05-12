import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Showreel from '@/components/Showreel'
import Cases from '@/components/Cases'
import Comparison from '@/components/Comparison'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import ContactModal from '@/components/ContactModal'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Showreel />
      <Cases />
      <Comparison />
      <Process />
      <Pricing />
      <Contact />
      <ContactModal />
    </main>
  )
}
