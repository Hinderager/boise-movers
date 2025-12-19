import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Users, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Choose an HVAC Contractor in Boise | Boise HVAC Pros',
  description: 'Not all HVAC companies in Boise are the same. Here\'s what to look for when choosing an HVAC contractor-and red flags to avoid.',
  alternates: {
    canonical: 'https://boise-movers.com/blogs/choosing-hvac-contractor-boise',
  },
}

export default function BlogPost() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/generated/choosing-contractor.webp"
          alt="Choosing an HVAC Contractor in Boise"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            How to Choose an HVAC Contractor in Boise
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            The company you choose matters more than you might think.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Your furnace dies on a Friday night. It's 25 degrees outside. You need someone fast. You Google "HVAC repair Boise" and get dozens of results. Now what?
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Choosing an HVAC contractor matters more than most people realize. A good company diagnoses correctly, charges fairly, and does quality work. A bad one misdiagnoses problems, overcharges, or does shoddy work that creates bigger problems later.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's what to look for-and what to avoid-when choosing an HVAC company in the Treasure Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Licensing Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Start with the Basics: Licensing and Insurance</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Idaho requires HVAC contractors to be licensed. This isn't just bureaucracy-it means they've met minimum standards for training and competence. Always verify licensing before hiring anyone.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              You can check contractor licenses through Idaho's Division of Building Safety. Takes two minutes online. If a company can't provide their license number or gets cagey when you ask, that tells you something.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Insurance matters too. Proper liability insurance protects you if something goes wrong during the work. Workers' compensation protects their employees-and keeps you from liability if someone gets hurt on your property. Ask for proof of both.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Experience and Reputation</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              How long has the company been in business? Longevity isn't everything, but companies that do bad work tend not to last. Five years in business means they've survived market ups and downs and kept customers happy enough to sustain a business.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Online reviews help, but read them critically. Look for patterns rather than individual complaints. Every company gets an occasional bad review. But if multiple people mention the same issue-surprise charges, missed appointments, poor communication-pay attention.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Google reviews, Yelp, and the Better Business Bureau all give you data points. So does asking neighbors or posting in local Facebook groups. Boise's big enough to have options but small enough that word gets around about who does good work.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Be wary of companies with only five-star reviews. Real businesses get some complaints. A mix of 4-5 stars with occasional lower ratings (and thoughtful responses from the company) is more trustworthy than a suspiciously perfect record.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Pricing Transparency</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Good HVAC companies explain their pricing clearly. They tell you the service call fee upfront. They provide a written quote before starting work. They don't add surprise charges after the fact.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Ask how they price work. Some charge flat rates for common repairs. Others charge time and materials. Neither is inherently better, but you should understand what you're agreeing to.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Be cautious of quotes that seem dramatically lower than others. HVAC work has real costs-parts, labor, insurance, overhead. A company significantly undercutting everyone else is either cutting corners somewhere or planning to upsell you later.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              The cheapest option rarely turns out to be the best value. Quality work that lasts beats a cheap repair that fails in six months.
            </p>
          </div>
        </div>
      </section>

      {/* Red Flags Section - Dark Blue */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Red Flags to Watch For</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Some warning signs should make you think twice before hiring:
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100"><strong>High-pressure sales tactics.</strong> A good tech gives you information and lets you decide. A bad one pushes you to commit immediately.</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100"><strong>Demanding large deposits.</strong> Some deposit for scheduled work is reasonable. Requiring half the job cost upfront is not standard practice.</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100"><strong>Cash-only requests.</strong> Professional businesses accept cards and provide receipts. Cash-only often means they're avoiding taxes or have no paper trail.</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100"><strong>No physical address.</strong> Legitimate contractors have a place of business you can verify. A PO box and cell phone number isn't enough.</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100"><strong>Reluctance to provide references.</strong> Companies that do good work are happy to let you talk to past customers.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Good Service Looks Like</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When you find a good HVAC contractor, the experience is different. Here's what you should expect:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Clear communication.</strong> They answer your questions without being dismissive or condescending. They explain what's wrong in terms you can understand.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Respect for your home.</strong> They wear shoe covers or booties. They clean up after themselves. They don't leave a mess.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Written everything.</strong> Quotes are in writing. Warranties are in writing. You're not relying on verbal promises.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Follow-up.</strong> After major work, they check in to make sure everything's working correctly. They're available if something isn't right.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Honest recommendations.</strong> They tell you when repair makes more sense than replacement. They don't push unnecessary services or upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Quotes Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Get Multiple Quotes (When Time Allows)</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For major work like system replacement, getting two or three quotes is smart. You'll see a range of prices and approaches. You'll get a sense of who explains things well and who just wants to make a sale.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Don't just compare bottom-line prices. Compare what's included. A quote that's $500 more but includes a better warranty and higher-efficiency equipment might be the better deal.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              For emergency repairs, you might not have time to shop around. That's why it's good to identify a reliable HVAC company before you need one. Get maintenance done annually, build a relationship, and you'll have someone to call when trouble hits.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Choosing an HVAC contractor isn't exciting. But it matters. The company you pick affects how much you pay, how long your equipment lasts, and how comfortable your home is.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Look for licensed, insured contractors with a solid reputation. Expect transparent pricing and clear communication. Avoid anyone who pressure-sells, demands unusual payment terms, or can't answer basic questions about their business.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              The right HVAC company is a partner you'll work with for years. Take the time to find one you trust.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Looking for an HVAC Contractor You Can Trust?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We're licensed, insured, and committed to honest service. Call us for a free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2085059352"
                className="inline-block bg-[#FFC845] hover:bg-yellow-400 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 505-9352
              </a>
              <span className="text-blue-100 self-center">Serving Boise, Meridian, Nampa & the Treasure Valley</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Articles
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-[#0b7fb6] transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
