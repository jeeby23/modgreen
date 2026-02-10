import Navbar from '@/components/Nav'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PortfolioGrid />
    </div>
  )
}