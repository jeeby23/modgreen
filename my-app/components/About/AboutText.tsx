import BaseLayout from '@/Layout/BaseLayout'

export default function AboutText() {
  return (
    <BaseLayout>
      <section className="w-full  py-16 md:py-24">
        <div >
          <h2 className="text-xl md:text-2xl font-bold tracking-wide uppercase mb-10 md:mb-12">
            ABOUT ME →
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-10">
            I'm a professional model based in the United States with a deep passion for blending
            high-fashion storytelling with real-world adventure. From editorial shoots in New York
            and Los Angeles to campaigns in remote deserts, tropical jungles, mountain summits,
            coastal cliffs, and urban rooftops around the world — every project is a journey. I
            thrive on creating powerful, authentic images in extraordinary places.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-10">
            Modeling for me is more than poses and lighting — it's about exploration, resilience,
            and telling stories through movement and environment. Whether I'm scaling rocks for a
            fitness editorial, running through waves for a swimwear campaign, or posing in ancient
            ruins for a luxury brand, I bring the same energy: fearless, focused, and fully present.
            I believe beauty is strongest when it's tied to real experiences and the thrill of the
            unknown.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            My mission is simple: to inspire others to embrace adventure, push boundaries, and
            redefine what a modern model can be. Through my work, I aim to show that strength,
            grace, and courage can coexist — on the runway, in the wild, and everywhere in between.
            This is my story, and it's still unfolding. Let's create something unforgettable
            together. ✈️
          </p>
        </div>
      </section>
    </BaseLayout>
  )
}
