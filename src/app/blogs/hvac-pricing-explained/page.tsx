import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC Pricing Explained: What AC & Furnace Service Costs in Boise | Boise HVAC Pros',
  description: 'How much does HVAC repair cost in Boise? Here\'s the straightforward explanation of HVAC pricing - service calls, repair costs, and what affects your quote in the Treasure Valley.',
  alternates: {
    canonical: 'https://boise-movers.com/blogs/hvac-pricing-explained',
  },
}

export default function BlogPost() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/generated/hvac-pricing.webp"
          alt="HVAC Pricing Explained"
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
            HVAC Pricing: How It Actually Works
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            No mystery formulas. No surprise fees. Just a straight answer about HVAC costs in Boise.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Your AC stops cooling on a 95-degree day. You need help. But before you call anyone, you want to know: how much is this going to cost?
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Fair question. HVAC pricing can seem mysterious if you've never dealt with it before. Some companies are deliberately vague, which doesn't help. Others throw out numbers without explaining what you're actually paying for.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's how HVAC service pricing actually works in the Boise area-whether you're looking at repairs, maintenance, or a full system replacement.
            </p>
          </div>
        </div>
      </section>

      {/* Service Call Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">The Service Call Fee</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most HVAC companies charge a service call fee-sometimes called a diagnostic fee or trip charge. In the Boise area, this typically runs $75-150. This covers the technician coming to your home and diagnosing the problem.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Think of it like a doctor's visit. You're paying for their expertise in figuring out what's wrong. A good tech can diagnose most issues in 15-30 minutes because they've seen hundreds of similar problems.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Some companies waive the service call fee if you proceed with the repair. Others don't. Neither approach is right or wrong-just ask upfront so you know what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Repair Costs Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Repairs Actually Cost</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HVAC repair costs depend on two things: the part that needs replacing and the labor to install it. Here are typical ranges for common repairs in the Treasure Valley:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Capacitor replacement:</strong> $150-300. Capacitors fail frequently, especially in older units. They're relatively cheap parts, and replacement is straightforward for a trained tech.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Contactor replacement:</strong> $150-350. Another common failure point. Contactors handle the electrical load when your system starts up.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Blower motor:</strong> $400-800. More expensive because the part costs more and the labor is more involved. This is the fan that pushes air through your ductwork.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Compressor:</strong> $1,500-3,000+. The big one. Compressors are expensive parts and labor-intensive to replace. At this price point, you should seriously consider whether a new system makes more sense.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Refrigerant recharge:</strong> $200-600 depending on how much is needed and which refrigerant your system uses. R-410A is more common and cheaper; R-22 (in older systems) is being phased out and costs significantly more.
            </p>
          </div>
        </div>
      </section>

      {/* What Affects Price Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Affects Your HVAC Repair Quote</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Beyond the specific repair needed, several factors affect what you'll pay:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Time of service.</strong> Emergency calls on weekends or at 2 AM cost more than Tuesday afternoon appointments. That's industry standard-technicians have to be paid more for inconvenient hours.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>System accessibility.</strong> If your equipment is in a tight attic crawlspace or requires removing obstacles to reach, that adds time and labor.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Equipment age and brand.</strong> Parts for older or less common systems can be harder to source and more expensive. Standard brands like Carrier, Trane, and Lennox have readily available parts.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Multiple issues.</strong> Sometimes what seems like one problem is actually several. A tech might find that your capacitor failed and took out your contactor with it. That's more parts and labor than a single-component fix.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Costs */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">New System Installation Costs in Boise</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If repairs aren't worth it, or your system is just done, replacement costs vary widely based on what you need:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>AC unit replacement:</strong> $4,000-8,000 for most homes. This includes the outdoor condenser and indoor evaporator coil, plus labor and materials.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Furnace replacement:</strong> $3,500-7,000 for gas furnaces. Electric furnaces tend to be slightly less. High-efficiency models cost more upfront but save on energy bills.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Complete HVAC system:</strong> $8,000-15,000+ for both heating and cooling equipment. The range is wide because homes vary-a 1,500 square foot ranch costs less to outfit than a 3,500 square foot two-story.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              These prices include professional installation, which matters more than most people realize. Improper installation is the leading cause of premature HVAC failure and efficiency problems.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How We Handle HVAC Pricing</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We believe in straightforward pricing. When our tech diagnoses your system, they'll give you a clear quote before any work begins. You know exactly what you're paying for-no surprises.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              If we find additional issues during the repair, we stop and discuss them with you first. We don't just add charges and present you with a bigger bill at the end.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Upfront pricing before work begins</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">No hidden fees or surprise charges</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Clear explanation of what needs repair</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Financing available for larger jobs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HVAC pricing isn't mysterious once you understand what you're paying for. Service calls cover diagnosis. Repairs combine parts and labor. Installations depend on equipment choice and home requirements.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              When comparing HVAC quotes in Boise, make sure you're comparing similar scopes of work. Ask what's included. Ask about warranties. Ask how long the company has been in business and whether they're licensed and insured.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              The cheapest quote isn't always the best value-especially in HVAC where quality installation makes a huge difference in how long your system lasts and how efficiently it runs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need HVAC Service in Boise?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We'll diagnose the problem and give you a clear price before any work begins.
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
