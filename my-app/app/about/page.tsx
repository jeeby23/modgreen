import AboutHero from '@/components/About/AboutHero'
import AboutText from '@/components/About/AboutText'
import Navbar from '@/components/Nav'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <section className="bg-black">
        <AboutText />
      </section>
      <Footer />
    </div>
  )
}
