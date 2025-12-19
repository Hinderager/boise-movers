import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Flame, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Should You Repair or Replace Your Furnace? | Boise HVAC Pros',
  description: 'Is it worth repairing your old furnace, or are you throwing money away? Here\'s how to decide whether to repair or replace your furnace in Boise.',
  alternates: {
    canonical: 'https://boise-movers.com/blogs/repair-vs-replace-furnace',
  },
}

export default function BlogPost() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/generated/repair-vs-replace.webp"
          alt="Repair vs Replace Furnace Decision"
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
            Should You Repair or Replace Your Furnace?
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Sometimes repair makes sense. Sometimes it's throwing good money after bad.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Your furnace stops working on a cold January night. The technician diagnoses a failed heat exchanger. Now you're facing a decision: spend $1,500 on the repair, or $6,000 on a new furnace. Which makes more sense?
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This question doesn't have a one-size-fits-all answer. It depends on your furnace's age, condition, the specific repair needed, and what makes financial sense for your situation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's a framework for thinking through the repair-vs-replace decision for furnaces in Boise and the Treasure Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Age Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Start with Age</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Furnaces typically last 15-20 years with proper maintenance. Some go longer, some fail earlier. But age matters because older furnaces have more problems waiting to happen.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Under 10 years old:</strong> Generally worth repairing unless the repair costs more than 50% of a new furnace. You've got years of life left.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>10-15 years old:</strong> The gray zone. Major repairs deserve serious consideration. Minor repairs are usually still worthwhile.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Over 15 years old:</strong> Replacement starts making more sense, especially for expensive repairs. Even if this repair works, another failure is probably coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Repair Cost Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The 50% Rule</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Here's a common guideline: if the repair costs more than 50% of a new furnace, replacement usually makes more sense. For a $5,000 replacement, that means repairs over $2,500 warrant a new system.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Why 50%? Because an expensive repair on an aging system is a gamble. You might get five more years. You might get five more months. That's money you won't get back when the next component fails.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This rule isn't absolute. A three-year-old furnace with an unusual failure might justify a pricey repair because you're getting essentially new equipment back. Context matters.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Some techs use an even simpler formula: if (repair cost × furnace age) exceeds $5,000, replace it. A $500 repair on a 12-year-old furnace? That's $6,000-probably time to consider replacement.
            </p>
          </div>
        </div>
      </section>

      {/* Specific Repairs Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What the Specific Repair Tells You</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Not all furnace repairs are equal. Some are routine maintenance. Others signal deeper problems.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Minor repairs</strong> like ignitors, flame sensors, blower motors, and thermostats are generally worth fixing regardless of age. These parts wear out and are relatively inexpensive to replace.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Heat exchanger failures</strong> are different. Heat exchangers are expensive to replace, and a cracked exchanger can be dangerous (carbon monoxide risk). On furnaces over 15 years old, a failed heat exchanger usually means it's time to replace.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Control board failures</strong> on older furnaces can be problematic because parts availability becomes an issue. If the board for your 18-year-old furnace is discontinued, replacement might be your only option.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Repeated failures</strong> of different components suggest the system is generally wearing out. One repair leads to another. At that point, you're just prolonging the inevitable.
            </p>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Efficiency Angle</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Older furnaces are less efficient than modern equipment. A 20-year-old furnace might be 80% efficient (or less), meaning 20% of your heating dollars go up the flue. New furnaces hit 95-98% efficiency.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Does that efficiency gain pay for a new furnace? Sometimes. It depends on your heating costs and how long you plan to stay in your home. For a Boise home spending $1,500/year on heating, a 15% efficiency improvement saves roughly $225/year.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              That's real money, but it takes years to pay back a $5,000 furnace investment through efficiency savings alone. The math works better if you were already facing a major repair.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Efficiency shouldn't be the only reason to replace, but it's a nice bonus when replacement already makes sense for other reasons.
            </p>
          </div>
        </div>
      </section>

      {/* When to Repair - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">When Repair Usually Makes Sense</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Here are situations where repairing your existing furnace is typically the right call:
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Furnace is under 10 years old with a minor repair</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Repair cost is under 30% of replacement cost</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">First major repair on an otherwise well-maintained system</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Still under manufacturer warranty</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">You're planning to move soon and don't need a long-term solution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Replace Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">When Replacement Usually Makes Sense</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              And here's when you should probably put that repair money toward a new furnace:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>The furnace is over 15 years old</strong> and facing a repair over $1,000. At that age, more problems are coming.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>The heat exchanger is cracked.</strong> This is both expensive to repair and potentially dangerous. On older furnaces, it's almost always time to replace.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>You've had multiple repairs</strong> in the past few years. If you're on first-name basis with your HVAC tech, your furnace is telling you something.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Repair parts are discontinued.</strong> Some older systems simply can't be fixed anymore because no one makes the parts.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>You're doing other home improvements</strong> and can bundle the replacement with other work. Sometimes the timing is right.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              There's no magic formula, but here's a simple decision tree: If your furnace is under 10 and the repair is reasonable, fix it. If it's over 15 and the repair is expensive, replace it. Everything in between requires judgment based on your specific situation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A good HVAC company will give you honest advice, not push you toward whatever makes them more money. If a tech tells you a repair is worth doing on an older unit, they're probably right. If they say it's time to replace, ask them to explain why.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Idaho winters are cold. You need heat you can count on. Sometimes that means repairing what you have. Sometimes it means investing in something new. Either way, make the choice with clear eyes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Honest Advice on Your Furnace?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We'll diagnose the problem and give you straight talk about your options-repair or replace.
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
