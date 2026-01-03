import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Loading Help Kuna ID | Boise Movers',
  description: 'Professional loading help in Kuna, Idaho. Fast, careful service at fair prices. Licensed & insured. Call (208) 768-3987.',
  keywords: ['loading help Kuna', 'movers Kuna Idaho', 'moving services Kuna'],
  alternates: {
    canonical: 'https://boise-movers.com/cities-served/kuna/loading-help',
  },
}

const commonChallenges = ["Rental truck needs loading","POD or container","Storage unit transfer","Heavy furniture only","Just need muscle","Quick turnaround needed"]

export default function KunaLoadingHelpPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/loading-help.webp"
          alt="Loading Help in Kuna, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service Available</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Loading Help in Kuna</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional loading and unloading for Kuna residents. Professional, reliable, stress-free.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Loading Help Services in Kuna</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Need loading help in Kuna? We make moving simple. You've got enough to worry about - let us handle the heavy lifting.</p>
              <p>Our crew has helped hundreds of Kuna families with loading help. We show up on time, work efficiently, and treat your belongings with care.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Common Challenges We Handle</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {commonChallenges.map((challenge) => (
                <div key={challenge} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{challenge}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Kuna Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Kuna Service:</strong> We respond quickly to moving requests in Kuna.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start. No surprises.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Often available for urgent moves.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service you can count on.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Loading Help in Kuna?</h3>
              <p className="text-gray-300 mb-6">Call now for a free moving estimate.</p>
              <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 768-3987
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services in Kuna</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/kuna" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">All Kuna Services</Link>
            <Link href="/cities-served/kuna/local-moving" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Local Moving</Link>
            <Link href="/cities-served/kuna/packing-services" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Packing</Link>
            <Link href="/cities-served/kuna/loading-help" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Loading Help</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
