import Navbar from '@/components/Nav'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-400 text-lg">Last updated: February 10, 2026</p>
          </div>

          <section className="mb-16">
            <p className="text-gray-300 leading-relaxed mb-6">
              Thank you for visiting my website. Your privacy is important to me. This Privacy
              Policy explains how I collect, use, share, and protect your personal information when
              you visit this site, submit inquiries, or interact with my modeling and adventure
              content.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using this website, you consent to the practices described in this policy. If you
              do not agree, please do not use the site.
            </p>
          </section>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                1. Information I Collect
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  <strong>Personal Information</strong>: Name, email address, phone number (when you
                  contact me or submit an inquiry).
                </li>
                <li>
                  <strong>Automatically Collected Data</strong>: IP address, browser type, device
                  info, pages visited, time spent, and referral sources (via cookies and analytics
                  tools).
                </li>
                <li>
                  <strong>Photographs & Media</strong>: Images or videos you voluntarily submit
                  (e.g., for collaboration or fan content) — used only with your permission.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                2. How I Use Your Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">Your information may be used to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Respond to your inquiries, bookings, or collaboration requests</li>
                <li>Improve the website experience and content</li>
                <li>
                  Send occasional updates, newsletters, or adventure/modeling news (you can
                  unsubscribe anytime)
                </li>
                <li>Analyze site traffic and performance (anonymized)</li>
                <li>Protect against fraud or unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                3. Cookies & Similar Technologies
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This site uses cookies and similar tools to enhance your experience. These may
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Essential cookies (for site functionality)</li>
                <li>Analytics cookies (Google Analytics, anonymized)</li>
                <li>Performance & advertising cookies (if third-party embeds are used)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                You can manage or disable cookies through your browser settings. Note that disabling
                some cookies may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                4. Sharing Your Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I do not sell your personal information. I may share data only in these cases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  With trusted service providers (hosting, email, analytics) under strict
                  confidentiality
                </li>
                <li>To comply with legal obligations or protect rights/safety</li>
                <li>In case of business transfer (merger, acquisition, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                5. Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I take reasonable measures to protect your information from unauthorized access,
                loss, or misuse. However, no system is 100% secure — please use caution when sharing
                sensitive information online.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">6. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have rights to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Access, correct, or delete your personal data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent (where consent is the legal basis)</li>
                <li>Object to certain processing</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise these rights, email me at{' '}
                <a
                  href="mailto: jenniferstewart0090@gmail.com"
                  className="text-orange-500 hover:underline"
                >
                  {' '}
                  jenniferstewart0090@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                7. Third-Party Links & Services
              </h2>
              <p className="text-gray-300 leading-relaxed">
                This site may contain links to external sites or use third-party tools (Instagram,
                YouTube, analytics). These have their own privacy policies — I am not responsible
                for their practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I may update this Privacy Policy from time to time. Changes will be posted here with
                an updated "last updated" date. Significant changes will be communicated via email
                or site notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">9. Contact Me</h2>
              <p className="text-gray-300 leading-relaxed">
                For any questions or concerns about this Privacy Policy, feel free to reach out:
              </p>
              <div className="mt-6 space-y-3 text-gray-300">
                <p>
                  Email:{' '}
                  <a
                    href="mailto:jenniferstewart0090@gmail.com"
                    className="text-orange-500 hover:underline"
                  >
                    jenniferstewart0090@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:+1-386-344-8603" className="text-orange-500 hover:underline">
                    +1-386-344-8603
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
