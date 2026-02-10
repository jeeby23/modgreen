import Link from 'next/link';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative w-full bg-black">
      <div className="relative h-screen md:h-[85vh] lg:h-[80vh] w-full overflow-hidden">
        <Image
          src="/image/abouthero.jpg"
          alt="Elegant model portrait"
          fill
          className="
            object-cover 
            object-top        
            brightness-[0.85] 
            contrast-[1.1]
          "
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />

        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="absolute inset-0 -left-[10px] z-10 flex items-center  px-6 md:px-12 lg:px-20">
        <div className=" w-full text-center md:text-left">
          <h1 className="mb-3 md:mb-3 text-5xl sm:text-4xl md:text-4xl lg:text-4xl font-black tracking-[-0.03em]  text-white">
         ModGreen
          </h1>

          <div className="mb-2 md:mb-3 capitalize">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl  tracking-wider text-white/95">
            
              Empowering talent
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl  tracking-wider text-white/95">
          
              elevating opportunities
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl  tracking-wider text-white/95">
              redefining the industry
            </p>
          </div>

          <Link
            href="#" 
            className="
              inline-block 
              rounded-full 
              bg-white 
              px-8 sm:px-10 md:px-12 
              py-3 sm:py-4 
              text-xs sm:text-sm md:text-base 
              font-bold 
              uppercase 
              tracking-widest 
              text-black 
              transition-all 
              hover:bg-gray-200 
              hover:scale-105
            "
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}