import Navbar from '@/components/Nav'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-gray-400 text-lg">
              Last updated: February 10, 2026
            </p>
          </div>

          <section className="mb-16">
            <p className="text-gray-300 leading-relaxed mb-6">
              Welcome to my personal website. These Terms and Conditions govern your use of this site, any content you view, and any interactions with me (including inquiries, bookings, collaborations, or purchases).
            </p>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using this website, you agree to be bound by these terms. If you do not agree, please do not use the site or contact me for professional services.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              I reserve the right to update these terms at any time. Changes will be posted here with a new "last updated" date. Continued use of the site after changes constitutes acceptance.
            </p>
          </section>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                1. Use of the Website
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This site is provided for informational and professional purposes only. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Use the site for any unlawful, harassing, or harmful purpose</li>
                <li>Impersonate me or any other person</li>
                <li>Attempt to gain unauthorized access to any part of the site</li>
                <li>Upload viruses, malware, or harmful code</li>
                <li>Scrape, crawl, or systematically copy content without permission</li>
                <li>Use automated tools to interact with the site except as allowed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                2. Intellectual Property & Content
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All photographs, videos, text, graphics, logos, and other content on this website are owned by me or licensed to me. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Reproduce, distribute, modify, or create derivative works</li>
                <li>Use my images for commercial purposes without written permission</li>
                <li>Download or screenshot content for anything other than personal viewing</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                If you wish to license or use any of my images, please contact me directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                3. Bookings & Professional Services
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Any modeling, appearance, content creation, or collaboration agreement:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Requires a written contract or confirmed email agreement</li>
                <li>Is subject to availability, travel terms, usage rights, and compensation</li>
                <li>Deposits are non-refundable unless otherwise agreed</li>
                <li>Cancellations within 48 hours may incur a fee</li>
                <li>Usage rights are negotiated per project (e.g., time-limited, geographic limits, exclusivity)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                I reserve the right to refuse or cancel any booking for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                4. User Submissions & Messages
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you send me messages, photos, proposals, or other content:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>You retain ownership of your original content</li>
                <li>You grant me a non-exclusive, royalty-free license to review, store, and reply</li>
                <li>You confirm you have all necessary rights to submit the material</li>
                <li>I am not obligated to respond or use your submission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>I am not liable for any indirect, incidental, special, or consequential damages</li>
                <li>I do not guarantee any specific outcomes from bookings or collaborations</li>
                <li>My total liability shall not exceed the amount you paid me in the last 12 months</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                6. Governing Law & Dispute Resolution
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Any disputes shall be resolved exclusively in the state or federal courts located in Los Angeles County, California.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                7. Changes to These Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I may update these Terms from time to time. The updated version will be posted here with a new "last updated" date. Your continued use of the site after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                8. Contact
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms, please reach out:
              </p>
              <div className="mt-4 space-y-2 text-gray-300">
                <p>Email: <a href="mailto:jenniferstewart0090@gmail.com" className="text-orange-500 hover:underline">jenniferstewart0090@gmail.com</a></p>
                <p>Phone: <a href="tel:+13863448603" className="text-orange-500 hover:underline">+1 (386) 344-8603</a></p>
              </div>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}