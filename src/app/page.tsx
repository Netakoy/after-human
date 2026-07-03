import Link from 'next/link'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Showreel from '@/components/Showreel'
import Cases from '@/components/Cases'
import Scenarios from '@/components/Scenarios'
import Process from '@/components/Process'
import Formats from '@/components/Formats'
import Contact from '@/components/Contact'
import ContactModal from '@/components/ContactModal'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Showreel />
      <Cases />
      <Scenarios />
      <Process />
      <Formats />
      <Contact />
      <ContactModal />
      <footer className="page-pad py-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <span className="font-unbounded text-[10px] tracking-[0.2em] text-silver/30">© {new Date().getFullYear()} AFTER HUMAN</span>
        <Link
          href="/privacy"
          className="font-unbounded text-[10px] tracking-[0.2em] text-silver/30 hover:text-silver/60 transition-colors"
        >
          ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
        </Link>
      </footer>
    </main>
  )
}
