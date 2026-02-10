'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

type FaqItem = {
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    question: "How can I book you for a modeling job or collaboration?",
    answer:
      "I’m available for fashion editorials, commercial campaigns, brand partnerships, adventure/travel shoots, and creative projects. Just send me a message through the contact form with your brief, mood board, dates, and budget — I’ll get back to you within 48 hours!",
  },
  {
    question: "What kind of modeling do you do?",
    answer:
      "I specialize in high fashion, editorial, commercial, swimwear, fitness, and adventure modeling. I love blending high-end fashion with real-world storytelling — think desert dunes, mountain peaks, ocean cliffs, and urban rooftops. Every shoot is an adventure!",
  },
  {
    question: "Do you travel for shoots and collaborations?",
    answer:
      "Absolutely! I’m always up for traveling — whether it's for a destination campaign, brand trip, or creative project. I’ve shot in deserts, jungles, beaches, cities, and mountains across multiple continents. Let’s create something unforgettable together.",
  },
  {
    question: "How do you handle collaborations and sponsored content?",
    answer:
      "I’m open to paid partnerships, gifted collaborations, and creative exchanges. I only work with brands that align with my values — authenticity, empowerment, adventure, and sustainability. Send me your proposal and let’s talk!",
  },
  {
    question: "Can I hire you for personal or private shoots?",
    answer:
      "Yes — I’m available for private photoshoots, boudoir, artistic nudes, couples, or personal branding projects. Everything is handled with full consent, professionalism, and privacy. Just let me know your vision!",
  },
  {
    question: "How do you stay safe while traveling alone for shoots?",
    answer:
      "Safety is always my top priority. I share my itinerary with trusted people, use location sharing, stay in reputable accommodations, and work with professional teams. I also choose locations and collaborators carefully. Adventure, yes — recklessness, never.",
  },
  {
    question: "How can fans or brands stay updated on my adventures?",
    answer:
      "Follow me on Instagram and TikTok for behind-the-scenes, travel diaries, and new shoots! You can also sign up for my newsletter to get exclusive updates, sneak peeks, and first looks at new projects.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-12 md:mb-16 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl overflow-hidden bg-gray-950/30 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-6 py-5 md:py-6 text-left hover:bg-gray-900/50 transition-colors"
              >
                <span className="text-lg md:text-xl font-medium pr-8">{item.question}</span>
                <ChevronDown
                  size={24}
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 py-5 md:py-6 px-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-20">
          <p className="text-gray-400 mb-6 text-lg">
            Still have a question? I’d love to hear from you!
          </p>
          <Link
            href="/contact"
            className="
              inline-block 
              px-10 py-4 
              bg-black/80
              text-white 
              text-sm md:text-base 
              font-bold 
              uppercase 
              tracking-widest 
              rounded-full 
              shadow-lg 
              hover:bg-white/10
              hover:text-white/90
              hover:scale-105 
              transition-all duration-300
            "
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}