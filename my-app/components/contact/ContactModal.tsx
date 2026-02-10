'use client'

import { X, Phone, Mail } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const contactInfo = {
    phone: '+1-386-344-8603',
    email: 'jenniferstewart0090@gmail.com',
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md mx-4 p-8 rounded-2xl shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={28} />
        </button>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Get in Touch</h3>

        <div className="space-y-6">
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
          >
            <div className="p-4 rounded-full bg-transparent border border-white/20">
              <Phone size={26} className="text-white" />
            </div>
            <div>
              <p className="text-white/70 text-sm uppercase tracking-wider">Call Us</p>
              <p className="text-white font-medium text-lg">{contactInfo.phone}</p>
            </div>
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
          >
            <div className="p-4 rounded-full bg-transparent border border-white/20">
              <Mail size={26} className="text-white" />
            </div>
            <div>
              <p className="text-white/70 text-sm uppercase tracking-wider">Email Us</p>
              <p className="text-white font-medium text-lg">{contactInfo.email}</p>
            </div>
          </a>
        </div>

        <p className="text-center text-white/50 text-sm mt-8">We usually reply within 24 hours</p>
      </div>
    </div>
  )
}
