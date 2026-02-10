import Image from 'next/image';

type WorkItem = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  model: string;
  brand: string;
  date: string;
};

const works: WorkItem[] = [
  {
    type: 'video',
    src: '/video/latest-video.mp4', 
    alt: 'Iris Law',
    model: 'IRIS NAW',
    brand: 'Colombia',
    date: 'FEBRUARY 2026',
  },
  {
    type: 'video',
    src: '/video/lateste-video-3.mp4',
    alt: 'Clement Chabernaud',
    model: 'CLEMENT FERRY',
    brand: 'GIORGIO carpel',
    date: 'SS26',
  },
  {
    type: 'image',
    src: '/image/latest.png', 
    alt: 'Amanda Joe',
    model: 'GLO JEBBA SANTOS',
    brand: 'PLLE FRANCE',
    date: 'JANUARY 2025',
  },
  {
    type: 'image',
    src: '/image/latest-two.png', 
    alt: 'Tida Rosvall',
    model: 'ADRUEN TAJADA',
    brand: 'TAY ALEXA',
    date: ' FEBRUARY 2026',
  },
  {
    type: 'video',
    src: '/video/latest-video-2.mp4', 
    alt: 'Precious Lee',
    model: 'PRECIOUS LEE',
    brand: "HARPER'S Zaa",
    date: 'FEBRUARY 2026',
  },
  {
    type: 'image',
    src: '/image/latest-one.png',
    alt: 'Maggie Maurer',
    model: 'SARA SPADARI',
    brand: 'BYREDO ',
    date: 'SS26',
  },
  {
    type: 'image',
    src: '/image/lateset-three.png', 
    alt: 'Louis Baines',
    model: 'VITO BAUIE',
    brand: 'ISABEL ZUMA',
    date: 'SS26',
  },
  {
    type: 'image',
    src: '/image/lateset-four.png', 
    alt: 'Tongtong Chen, Erik Ilin',
    model: 'THALES MACHWDO',
    brand: ' THE GATHERING',
    date: '2026',
  },
];

export default function LatestWorks() {
  return (
    <section className="relative bg-black text-white py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h2 className="text-[13px] md:text-[15px] font-bold tracking-[0.5em] uppercase mb-3 opacity-80">
            LATEST
          </h2>
          <p className="text-3xl md:text-5xl font-black tracking-tight uppercase">
            Featured Works
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {works.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative overflow-hidden rounded-sm shadow-lg transition-transform duration-500 hover:scale-[1.02]"
            >
    
              <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                {item.type === 'video' ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-90"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
                <p className="text-xs md:text-sm font-bold tracking-wider uppercase opacity-90 mb-1">
                  {item.model}
                </p>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-70">
                  {item.brand} {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}