import BaseLayout from '@/Layout/BaseLayout'

export default function AboutText() {
  return (
    <BaseLayout>
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div >
        <h2 className="text-xl md:text-2xl font-bold tracking-wide uppercase mb-10 md:mb-12">
          ABOUT US →
        </h2>

        <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-3xl">
          Modnet was created to solve a growing problem in the modeling industry—models lacked a streamlined way to showcase their work, while agencies struggled to efficiently discover new talent. Traditional scouting methods were outdated, fragmented, and time-consuming.
        </p>

        <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-3xl">
          We set out to change that. By building a digital platform designed for modern talent discovery, Modnet gives models a professional, shareable portfolio while making it easier than ever for agencies to find and connect with emerging talent.
        </p>

        <p className="text-base md:text-lg leading-relaxed max-w-3xl">
          Our mission is simple: to modernize the industry, empower models with better tools, and create new opportunities through innovation. This is just the beginning. 🚀
        </p>
      </div>
    </section>
    </BaseLayout>
  );
}