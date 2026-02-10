'use client'

import { useState } from 'react'
import Link from 'next/link'
import ContactModal from '@/components/contact/ContactModal' 

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 bg-transparent">
        <div className="text-2xl font-bold tracking-tighter text-white">
          <Link href="/">Modgreen</Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="hidden lg:flex items-center bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
            <input
              type="text"
              placeholder="SEARCH"
              className="bg-transparent text-white text-xs w-48 focus:outline-none uppercase tracking-widest px-2"
            />
            <svg
              className="w-4 h-4 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex gap-6 text-xs font-bold tracking-widest uppercase text-white">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              About
            </Link>
            
            <Link href="/portfolio" className="hover:opacity-70 transition-opacity">
              Portfolio
            </Link>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col px-6 py-8 gap-6 text-white uppercase text-sm font-bold tracking-widest">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:bg-white hover:text-black p-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:bg-white hover:text-black p-2"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              onClick={() => setMenuOpen(false)}
              className="hover:bg-white hover:text-black p-2"
            >
              Portfolio
            </Link>
           
          </div>
        </div>
      )}

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  )
}
