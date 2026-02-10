import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white/70 text-[10px] md:text-xs uppercase tracking-wider font-medium">
      <div className="border-t border-white/10 bg-black/80">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0 text-center">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="#" className="hover:text-white/90 transition-colors">
                ABOUT US
              </Link>
              <Link href="/contact" className="hover:text-white/90 transition-colors">
                CONTACT
              </Link>
              <Link href="/FAQ" className="hover:text-white/90 transition-colors">
                FAQ
              </Link>
              <Link href="/terms" className="hover:text-white/90 transition-colors">
                Terms and Conditionns
              </Link>
              <Link href="/privacy" className="hover:text-white/90 transition-colors">
                Policy and Privacy
              </Link>
              <Link href="/portfolio" className="hover:text-white/90 transition-colors">
                Portfolio
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="#" className="hover:text-white/90 transition-colors">
                INSTAGRAM
              </Link>
              <Link href="#" className="hover:text-white/90 transition-colors">
                TIKTOK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
