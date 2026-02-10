import BaseLayout from '@/Layout/BaseLayout'
import Navbar from '@/components/Nav'
import ModelGrid from '@/components/Home/ModelGrid'
import BrandHero from '@/components/Home/BrandHero'
import LatestWorks from '@/components/Home/LatestWorks'
import Preview from '@/components/Home/preview'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="relative min-h-auto w-full bg-black text-white font-sans">
      <Navbar />
      <div className="relative h-[90vh] w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-60">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col justify-end items-end p-12 md:p-24 bg-gradient-to-t from-black via-transparent">
          <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase mb-4 text-white/90">
            Explore the Collective
          </h2>
          <div className="flex flex-col items-end">
            {['Model', 'Adventures'].map((item) => (
              <span
                key={item}
                className="text-5xl md:text-6xl font-extrabold uppercase tracking-tighter hover:italic cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ModelGrid
        modelName="JENNIFER STEWART"
     
        images={[
          { src: "/image/jess.png" },
          { src: "/image/jessSeven.png" },
          { src: "/image/jessThree.png" },
          { src: "/image/jessFour.png" },
          { src: "/image/jessFive.png" },
          { src: "/image/jessSix.png" },
          { src: "/image/jessEight.png" },
          { src: "/image/jess.png", alt: "Kai Schreiber - editorial shot" },
        ]}
      />
      <BrandHero />
      <LatestWorks />
      <Preview />
      <Footer/>
    </div>
  )
}
