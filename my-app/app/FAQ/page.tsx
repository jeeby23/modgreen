import FaqSection from '@/components/FAQ/FaqSection'
import Navbar from '@/components/Nav'
import Footer from '@/components/footer'
export default function FAQ() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <FaqSection />
      <Footer />
    </div>
  )
}
