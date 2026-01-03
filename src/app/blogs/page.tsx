import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Moving Blog | Tips & Guides | Boise Movers Pros',
  description: 'Expert moving tips, guides, and insights for relocating in Boise and the Treasure Valley. Learn from the professional movers at Boise Movers Pros.',
  alternates: {
    canonical: 'https://boise-movers.com/blogs',
  },
}

const blogPosts: { slug: string; title: string; excerpt: string }[] = [
  // Moving blog posts will be added here
]

export default function BlogsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Moving Tips & Guides
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Helpful advice and insights about moving in the Treasure Valley. Real tips from experienced moving professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="relative h-48 bg-dark-blue">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 text-6xl font-bold">Moving</span>
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
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Moving tips and guides coming soon. Check back for helpful advice about relocating in the Boise area.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your move.
          </p>
          <a
            href="tel:2087683987"
            className="inline-block bg-[#FFC845] hover:bg-yellow-400 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
