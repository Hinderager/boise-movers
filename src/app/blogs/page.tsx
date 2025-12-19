import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Blog | Heating & Cooling Tips | Boise HVAC Pros',
  description: 'Expert tips, guides, and insights about heating and air conditioning in Boise and the Treasure Valley. Learn from the pros at Boise HVAC Pros.',
  alternates: {
    canonical: 'https://boise-movers.com/blogs',
  },
}

const blogPosts = [
  {
    slug: 'hvac-pricing-explained',
    title: 'HVAC Service Pricing: How It Actually Works',
    excerpt: 'Wondering what HVAC repairs or installations cost in Boise? Here\'s the straightforward explanation.',
    image: '/hero-hvac.jpg',
  },
  {
    slug: 'signs-ac-needs-repair',
    title: '7 Signs Your AC Needs Repair (Before It Dies Completely)',
    excerpt: 'Your AC is probably warning you before it fails. Here\'s what to watch for.',
    image: '/hero-hvac.jpg',
  },
  {
    slug: 'repair-vs-replace-furnace',
    title: 'Should You Repair or Replace Your Furnace?',
    excerpt: 'Sometimes repair makes sense. Sometimes you\'re just throwing money away. Here\'s how to decide.',
    image: '/hero-hvac.jpg',
  },
  {
    slug: 'choosing-hvac-contractor-boise',
    title: 'How to Choose an HVAC Contractor in Boise',
    excerpt: 'Not all HVAC companies are the same. Here\'s what to look for and what to avoid.',
    image: '/hero-hvac.jpg',
  },
  {
    slug: 'seasonal-hvac-maintenance',
    title: 'Seasonal HVAC Maintenance for Idaho Homes',
    excerpt: 'Idaho puts your HVAC through extremes. Here\'s how to keep it running through hot summers and cold winters.',
    image: '/hero-hvac.jpg',
  },
]

export default function BlogsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tips, guides, and insights about heating and cooling in the Treasure Valley. Real advice from real HVAC professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48 bg-dark-blue">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/20 text-6xl font-bold">HVAC</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your HVAC project.
          </p>
          <a
            href="tel:2085059352"
            className="inline-block bg-[#FFC845] hover:bg-yellow-400 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
