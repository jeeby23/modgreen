import Image from 'next/image'

export default function BrandHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="relative h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster="/image/amg-pic.jpeg"
          >
            <source src="/video/amg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none" />
        </div>

        <div className="relative h-full w-full hidden md:block">
          <Image
            src="/image/amg-pic.jpeg"
            alt="Featured talent"
            fill
            className="object-cover object-center"
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
