import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Movers Meridian Idaho | Boise Movers',
  description: 'Professional movers in Meridian, Idaho. Local and long-distance moves, packing, loading help. Licensed & insured. Call (208) 768-3987.',
  keywords: ['movers Meridian', 'moving company Meridian Idaho', 'local movers Meridian', 'moving services Meridian'],
  alternates: {
    canonical: 'https://boise-movers.com/cities-served/meridian',
  },
}

const neighborhoods = ['Downtown Meridian', 'Paramount', 'Lochsa Falls', 'Settlers Bridge', 'Tuscany', 'Spurwing', 'Victory Commons', 'Silverstone']

const services = [
  { name: 'Local Moving', href: '/cities-served/meridian/local-moving', description: 'Same-day local moves in the Treasure Valley' },
  { name: 'Apartment Moving', href: '/cities-served/meridian/apartment-moving', description: 'Apartment and condo moving services' },
  { name: 'Residential Moving', href: '/cities-served/meridian/residential-moving', description: 'Full-service home moving' },
  { name: 'Loading Help', href: '/cities-served/meridian/loading-help', description: 'Professional loading and unloading' },
  { name: 'Packing Services', href: '/cities-served/meridian/packing-services', description: 'Expert packing and unpacking' },
  { name: 'Furniture Moving', href: '/cities-served/meridian/furniture-moving', description: 'Heavy furniture and piano moving' },
]

export default function MeridianPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/meridian-movers.webp"
          alt="Movers in Meridian, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Movers in Meridian</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional moving services for Meridian homes and businesses. Fast, careful, and affordable.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Meridian Moving Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Moving in Meridian? We've got you covered. Whether you're heading across town or across the state, our team handles your stuff like it's our own.</p>
              <p>We've moved hundreds of Meridian families. Apartments, houses, offices - we know the area and we know how to get you settled fast without the stress.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Services in Meridian</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-dark-blue group-hover:text-[#0b7fb6]">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Meridian Areas We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-dark-blue flex-shrink-0" />
                  <span className="text-sm text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Meridian Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local Knowledge:</strong> We know Meridian streets, buildings, and neighborhoods.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Response:</strong> Same-day and next-day moves often available.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Careful Handling:</strong> Your furniture arrives in the same condition it left.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fair Pricing:</strong> Upfront quotes with no hidden fees or surprises.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Movers in Meridian?</h3>
              <p className="text-gray-300 mb-6">Call us for a free moving estimate.</p>
              <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 768-3987
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Boise</Link>
            <Link href="/cities-served/meridian" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Meridian</Link>
            <Link href="/cities-served/nampa" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Nampa</Link>
            <Link href="/cities-served/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Caldwell</Link>
            <Link href="/cities-served/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
