import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Moving Resources | Tips & Guides | Boise Movers Pros',
  description: 'Moving resources, tips, and guides from Boise Movers Pros. Learn about planning and executing your move.',
  alternates: { canonical: 'https://boise-movers.com/resources' },
}

const resources = [
  { name: 'FAQ', slug: 'faq', title: 'Frequently Asked Questions' },
  { name: 'Moving Checklist', slug: 'moving-checklist', title: 'Complete Moving Checklist' },
  { name: 'Moving Tips', slug: 'moving-tips', title: 'Expert Moving Tips' },
  { name: 'Cost Calculator', slug: 'cost-calculator', title: 'Moving Cost Calculator' },
  { name: 'Financing', slug: 'financing', title: 'Moving Financing Options' },
]

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Moving Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Helpful information to make your move easier.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {resources.map((resource) => (
              <Link key={resource.slug} href={`/resources/${resource.slug}`} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6]">{resource.title}</h2>
                <span className="inline-flex items-center text-dark-blue font-semibold">Learn More <ArrowRight className="w-4 h-4 ml-2" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Have Questions?</h2>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
