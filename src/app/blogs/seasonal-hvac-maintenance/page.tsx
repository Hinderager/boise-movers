import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, CheckCircle, Snowflake, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Seasonal HVAC Maintenance for Idaho Homes | Boise HVAC Pros',
  description: 'Idaho puts your HVAC system through extremes. Here\'s how to maintain your heating and cooling equipment through Boise\'s hot summers and cold winters.',
  alternates: {
    canonical: 'https://boise-movers.com/blogs/seasonal-hvac-maintenance',
  },
}

export default function BlogPost() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/generated/seasonal-maintenance.webp"
          alt="Seasonal HVAC Maintenance for Idaho"
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
            Seasonal HVAC Maintenance for Idaho Homes
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Keep your system running through 100-degree summers and freezing winters.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Idaho is tough on HVAC systems. We get triple-digit summer heat that makes your AC work overtime. We get below-freezing winter nights that test your furnace. That swing from one extreme to another puts stress on equipment year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Maintenance isn't glamorous. Nobody gets excited about scheduling a furnace tune-up. But systems that get regular care last longer, run more efficiently, and break down less often. That's less money out of your pocket and fewer emergency calls on the coldest night of the year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's a seasonal approach to HVAC maintenance that makes sense for Boise-area homes.
            </p>
          </div>
        </div>
      </section>

      {/* Spring Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Spring: Get Your AC Ready</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Spring in Boise is unpredictable. Some years we're running heat in April. Other years we need AC by early May. Use this shoulder season to prep your cooling system before you actually need it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Schedule AC maintenance.</strong> This is the best time-HVAC companies aren't slammed yet, and if there's a problem, you have time to fix it before heat waves hit. A spring tune-up typically includes cleaning coils, checking refrigerant, testing electrical connections, and verifying the system starts and runs properly.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Clear the outdoor unit.</strong> Over winter, debris accumulates around your condenser. Dead leaves, pine needles, maybe some trash that blew against the unit. Clear at least two feet of space around it for proper airflow.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Change your filter.</strong> If you didn't change it in March, do it now. A clean filter at the start of cooling season helps your system work efficiently from day one.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Test the system.</strong> Before you really need it, turn on the AC for a few minutes. Make sure cool air comes out, the system cycles normally, and nothing sounds wrong. Better to discover issues now than on a 95-degree afternoon.
            </p>
          </div>
        </div>
      </section>

      {/* Summer Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Summer: Keep It Running</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Boise summers mean your AC runs a lot. During heat waves, it might run almost constantly. Here's how to help it keep up:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Check filters monthly.</strong> When the AC runs more, filters get dirty faster. A clogged filter makes your system work harder, uses more electricity, and can lead to freezing of the evaporator coil. Check monthly; change when needed.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Keep the outdoor unit clear.</strong> Vegetation grows fast in summer. Make sure plants, shrubs, and grass aren't encroaching on your condenser. Restricted airflow means reduced efficiency.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Watch for warning signs.</strong> The system running constantly, warm air from vents, strange noises, ice on refrigerant lines-these all indicate problems. Catch them early before a minor issue becomes a major breakdown.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Be realistic about temperature.</strong> Most AC systems are designed to cool about 20 degrees below outdoor temperature. When it's 105 outside, your house might only get to 85. That's not a malfunction-it's just physics. Running your system harder won't change that; it'll just stress the equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Fall Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Fall: Prep for Heating Season</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Fall is furnace time. Before you need heat, make sure your system is ready to provide it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Schedule furnace maintenance.</strong> Same logic as spring AC maintenance-do it before the rush. A fall tune-up includes checking the heat exchanger for cracks (safety issue), cleaning burners, testing safety controls, and verifying the system fires and heats properly.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Install a fresh filter.</strong> Your filter probably worked hard all summer. Start heating season with a clean one.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Test your thermostat.</strong> Switch from cooling to heating mode. Make sure it responds properly. If you have a programmable thermostat, update your schedule for winter habits.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Check your vents.</strong> Walk through your house and make sure supply and return vents aren't blocked by furniture, rugs, or drapes. Blocked vents create uneven heating and strain the system.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Test smoke and CO detectors.</strong> Furnaces burn fuel. Carbon monoxide is a real risk. Make sure your detectors work and have fresh batteries.
            </p>
          </div>
        </div>
      </section>

      {/* Winter Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Winter: Keep the Heat Flowing</h2>
            </div>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Idaho winters mean your furnace works hard. Here's how to help it-and what to watch for:
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              <strong>Change filters regularly.</strong> When heat runs constantly, filters load up faster. Check monthly, especially during cold snaps when the furnace barely shuts off.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              <strong>Keep vents clear.</strong> As you rearrange for holiday guests or bring in winter gear, make sure you're not blocking vents.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              <strong>Monitor for issues.</strong> Strange smells, unusual noises, short cycling, uneven heating-address these before they become emergencies. A furnace that struggles during mild cold weather will fail during the really cold nights.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed">
              <strong>Know your emergency plan.</strong> If heat fails when it's 10 degrees outside, what do you do? Have a backup plan-space heaters, a fireplace, a place to stay. And have an HVAC company's number ready. Emergency calls happen; being prepared makes them less stressful.
            </p>
          </div>
        </div>
      </section>

      {/* Year-Round Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Year-Round Basics</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Some maintenance tasks aren't seasonal-they're ongoing:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Change filters every 1-3 months</strong> depending on filter type, household size, and whether you have pets. Check monthly; you'll learn your home's rhythm.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Keep vents unobstructed.</strong> This sounds obvious but gets overlooked. Furniture placement, storage, curtains-they creep over vents without you noticing.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Listen and smell.</strong> You know what normal sounds and smells like. When something changes, pay attention. Early detection prevents expensive repairs.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Schedule professional maintenance annually.</strong> Spring for AC, fall for furnace. Yes, it costs money. But it's less than emergency repairs and premature replacement.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Idaho's climate demands a lot from HVAC equipment. Systems that get regular maintenance handle that demand better and last longer.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              You can do a lot yourself-filter changes, clearing debris, keeping vents open. But professional maintenance catches things you can't see: refrigerant levels, electrical connections, heat exchanger condition, safety controls.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Think of it like oil changes for your car. Skip them and the car runs fine-until it doesn't. Regular maintenance isn't exciting, but it beats the alternative.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Schedule Maintenance?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Don't wait for a breakdown. Let's make sure your system is ready for whatever Idaho weather throws at it.
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
