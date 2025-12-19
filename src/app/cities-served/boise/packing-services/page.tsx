import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Packing Services Boise ID | Boise Movers',
  description: 'Professional packing services in Boise, Idaho. Fast, careful service at fair prices. Licensed & insured. Call (208) 505-9352.',
  keywords: ['packing services Boise', 'movers Boise Idaho', 'moving services Boise'],
  alternates: {
    canonical: 'https://boise-movers.com/cities-served/boise/packing-services',
  },
}

const commonChallenges = ["Not enough time to pack","Fragile items","Kitchen full of dishes","Art and mirrors","Full-service needed","Just boxes and tape"]

export default function BoisePackingServicesPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/packing-services.webp"
          alt="Packing Services in Boise, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service Available</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Packing Services in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Expert packing and unpacking for Boise residents. Professional, reliable, stress-free.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Packing Services Services in Boise</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Need packing services in Boise? We make moving simple. You've got enough to worry about - let us handle the heavy lifting.</p>
              <p>Our crew has helped hundreds of Boise families with packing services. We show up on time, work efficiently, and treat your belongings with care.</p>
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

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Boise Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Boise Service:</strong> We respond quickly to moving requests in Boise.</span>
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
              <h3 className="text-2xl font-bold text-white mb-4">Need Packing Services in Boise?</h3>
              <p className="text-gray-300 mb-6">Call now for a free moving estimate.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services in Boise</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">All Boise Services</Link>
            <Link href="/cities-served/boise/local-moving" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Local Moving</Link>
            <Link href="/cities-served/boise/packing-services" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Packing</Link>
            <Link href="/cities-served/boise/loading-help" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Loading Help</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
