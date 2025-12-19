import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '7 Signs Your AC Needs Repair Before It Dies | Boise HVAC Pros',
  description: 'Your air conditioner is probably warning you before it fails. Here are 7 signs your AC needs repair in Boise-catch problems early and avoid a breakdown.',
  alternates: {
    canonical: 'https://boise-movers.com/blogs/signs-ac-needs-repair',
  },
}

export default function BlogPost() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/generated/ac-warning-signs.webp"
          alt="Signs Your AC Needs Repair"
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
            7 Signs Your AC Needs Repair (Before It Dies Completely)
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Your air conditioner usually warns you before it fails. Here's what to watch for.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Air conditioners rarely die without warning. They give you signs-subtle at first, then more obvious. The trick is paying attention before a small problem becomes an expensive emergency on the hottest day of July.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Boise summers push AC systems hard. When temperatures hit triple digits, your unit is working overtime. Any underlying issues get amplified under that strain.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here are seven warning signs that your AC needs attention. Catch these early, and you're looking at a repair. Ignore them, and you might be shopping for a new system.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 1 */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">1. Weak or Warm Airflow</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The air coming from your vents should be cool and strong. If it's barely trickling out or feels warmer than it should, something's wrong.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Could be a clogged filter restricting airflow. Could be a failing blower motor. Could be low refrigerant. Or it could be ductwork problems, especially if some rooms get good airflow and others don't.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Start with the simplest fix: check your filter. If it's clean and you're still having issues, it's time for a professional diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 2 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">2. Strange Noises</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your AC makes some noise when it runs-that's normal. But new sounds or louder-than-usual operation means something's changed.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Grinding or screeching</strong> often indicates motor bearing problems. The bearings are wearing out, and if ignored, the motor will eventually fail.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Banging or clanking</strong> suggests something loose inside the unit-a broken fan blade, loose mounting hardware, or debris that got into the system.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Hissing</strong> can indicate a refrigerant leak. Refrigerant shouldn't escape from a healthy system.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Clicking</strong> at startup and shutdown is normal. Constant clicking during operation is not-usually points to electrical problems.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 3 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">3. Your Energy Bills Spiked</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Yes, your electric bill goes up in summer when you run the AC more. But if it jumped significantly compared to the same time last year, your system might be struggling.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              An AC that's losing efficiency has to work harder to achieve the same cooling. That extra work shows up on your bill. Common culprits include dirty coils, low refrigerant, or an aging compressor that's not performing like it used to.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Compare bills year-over-year if you can. Idaho Power can usually give you historical usage data. A 20-30% increase with similar weather and habits suggests your equipment needs attention.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 4 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">4. The System Runs Constantly</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              On the hottest days, your AC might run for extended periods. That's normal. But if it never shuts off-or runs all day just to maintain temperature-something's off.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A properly sized, well-functioning AC should cycle on and off. Continuous operation usually means the system can't keep up with the cooling load. Maybe it's undersized for your home. Maybe it's low on refrigerant. Maybe it's simply worn out.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Whatever the cause, a system that runs nonstop costs more to operate and wears out faster. It's trying to tell you something.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 5 */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">5. Short Cycling</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Short cycling is the opposite problem-the system turns on, runs briefly, shuts off, then starts again minutes later. Over and over.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This is hard on your equipment. Each startup draws significant electrical current and puts stress on the compressor. Systems that short cycle don't last as long.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Causes include a thermostat in a bad location (near a sunny window or heat source), refrigerant problems, electrical issues, or an oversized unit. A technician can diagnose which applies to your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 6 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">6. Water or Ice Where It Shouldn't Be</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Water pooling around your indoor unit usually means a clogged condensate drain. The AC removes humidity from your air, and that moisture needs somewhere to go. When the drain clogs, water backs up.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Ice on the refrigerant lines or evaporator coil is a bigger problem. It typically indicates low refrigerant, restricted airflow, or a failing component. Your AC shouldn't form ice under normal operation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              If you see ice, turn the system off and let it thaw. Running an iced-up AC can damage the compressor-and that's an expensive repair.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 7 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">7. Unusual Smells</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your AC shouldn't produce noticeable odors. If it does, pay attention to what you're smelling.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Musty or moldy smell</strong> suggests biological growth somewhere in the system-often in the ductwork or on the evaporator coil. Besides being unpleasant, this can affect indoor air quality.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Burning smell</strong> is more urgent. Could be an electrical problem or a motor overheating. Turn off the system and call for service.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Rotten egg smell</strong> (if you have gas appliances nearby) could indicate a natural gas leak. That's an emergency-evacuate and call your gas company.
            </p>
          </div>
        </div>
      </section>

      {/* When to Call - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">When to Call for AC Repair in Boise</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              If you notice one of these signs, don't panic-but don't ignore it either. Most AC problems are easier and cheaper to fix when caught early.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              The worst time to discover you need AC repair is during a heat wave when every HVAC company is slammed. Schedule a check-up before peak summer if something seems off.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Same-day service available</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Upfront pricing before repairs</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">All major brands serviced</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">24/7 emergency service</span>
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
              Your AC talks to you through these warning signs. Weak airflow, strange sounds, higher bills, constant running, short cycling, water or ice issues, and unusual smells all mean something's not right.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A repair now is almost always cheaper than an emergency replacement later. And it's definitely more comfortable than sweating through a Boise summer while waiting for a new system to be installed.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Listen to what your AC is telling you. When it starts complaining, it's probably time to call someone who speaks the language.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              AC Acting Up?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Don't wait for a complete failure. We'll diagnose the problem and give you honest options.
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
