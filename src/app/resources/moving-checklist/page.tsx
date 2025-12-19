import { Metadata } from 'next'
import { Phone, CheckSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Complete Moving Checklist | Boise Movers',
  description: 'Step-by-step moving checklist for Boise residents. Stay organized from planning through move day with our comprehensive guide.',
  alternates: { canonical: 'https://boise-movers.com/resources/moving-checklist' },
}

export default function MovingChecklistPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Moving Checklist</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Everything you need to do before, during, and after your move.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Moving is easier when you have a plan. This checklist breaks down everything you need to do, organized by timeline.</p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">6-8 Weeks Before Moving Day</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Create a moving budget:</strong> Factor in movers, packing supplies, deposits, utility transfers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Research and book movers:</strong> Get quotes from at least 3 companies. We book up fast in summer.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Start decluttering:</strong> Go through closets, garage, storage. Sell, donate, or toss what you don't need.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Gather important documents:</strong> Birth certificates, passports, medical records, financial paperwork</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Notify your landlord:</strong> Check your lease for notice requirements-usually 30-60 days</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">4 Weeks Before</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Order packing supplies:</strong> Boxes, tape, bubble wrap, markers, labels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Start packing non-essentials:</strong> Seasonal items, books, decor, things you don't use daily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Change your address:</strong> File a change of address with USPS-do it online or at the post office</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Transfer utilities:</strong> Schedule disconnect at old place, connect at new place. Don't forget internet.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Update insurance:</strong> Contact home/renters insurance, auto insurance with new address</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Arrange for kids and pets:</strong> Moving day is easier if they're somewhere safe and out of the way</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">2 Weeks Before</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Confirm moving details:</strong> Double-check date, time, address with your moving company</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Finish major packing:</strong> Everything except daily essentials should be packed by now</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Use up perishables:</strong> Eat what's in the fridge and freezer. Don't buy more groceries.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Notify important parties:</strong> Banks, credit cards, subscriptions, employers, schools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Clean or donate old furniture:</strong> If you're not taking it, get it out now</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">1 Week Before</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Pack an essentials bag:</strong> Toiletries, clothes, medications, phone chargers, important docs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Defrost the freezer:</strong> If you're moving the fridge, give it time to dry out</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Return borrowed items:</strong> Library books, neighbor's tools, anything that's not yours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Clean the new place:</strong> If possible, do a quick clean before moving furniture in</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Reserve elevator or parking:</strong> If you're in an apartment, coordinate with management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Moving Day</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Be there or available:</strong> Either be present or make sure we can reach you by phone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Clear pathways:</strong> Make sure hallways, stairs, and doorways are accessible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Point out special items:</strong> Fragile, valuable, or items needing extra care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Do a final walkthrough:</strong> Check every room, closet, cabinet before leaving for good</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Take meter readings:</strong> Water, gas, electric-document the final numbers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Leave keys and garage openers:</strong> For landlord or new owners as arranged</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">After the Move</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Unpack essentials first:</strong> Beds, bathroom stuff, kitchen basics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Test utilities:</strong> Make sure water, electric, gas, internet are all working</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Update driver's license:</strong> Idaho DMV requires address changes within 30 days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Register to vote:</strong> Update your voter registration with your new address</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Find new service providers:</strong> Doctors, dentists, vets, hair salon, etc.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Meet the neighbors:</strong> Introduce yourself. It's a small thing that goes a long way.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Too Much to Handle?</h2>
              <p className="text-gray-300 mb-6">Let us take the stress out of moving day. We'll handle the heavy lifting.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
