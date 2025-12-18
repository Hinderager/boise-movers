import { Metadata } from 'next'
import { Phone, DollarSign, Home, Truck, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Moving Cost Calculator | Boise Moving Prices',
  description: 'Estimate your moving costs in Boise. Learn what factors affect pricing and get a ballpark idea of what your move might cost.',
  alternates: { canonical: 'https://boise-movers.com/resources/cost-calculator' },
}

export default function CostCalculatorPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Moving Cost Guide</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Understand what goes into moving costs and get a ballpark estimate.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Moving costs depend on a bunch of different factors. Here's what affects pricing and some typical ranges for moves in the Boise area.</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6 mb-12">
              <div className="flex gap-3">
                <DollarSign className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Want an Exact Quote?</h3>
                  <p className="text-gray-600 mb-3">The best way to know what your move will cost is to call us. We'll ask a few questions and give you an accurate estimate—usually within a few minutes.</p>
                  <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-dark-blue text-white px-6 py-2 rounded-lg font-bold hover:bg-[#1a5a9e] transition-colors">
                    <Phone className="w-4 h-4" />(208) 505-9352
                  </a>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What Affects Moving Costs?</h2>

            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-3 items-start mb-3">
                  <Home className="w-7 h-7 text-[#FFC845] flex-shrink-0" />
                  <h3 className="text-xl font-bold text-dark-blue">Size of Your Home</h3>
                </div>
                <p className="text-gray-600 mb-3">More stuff means more time and more movers. A studio apartment takes a lot less time than a 4-bedroom house.</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Studio/1-bedroom: 2-4 hours</li>
                  <li>• 2-bedroom: 4-6 hours</li>
                  <li>• 3-bedroom: 6-8 hours</li>
                  <li>• 4+ bedroom: 8-12 hours or more</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-3 items-start mb-3">
                  <Truck className="w-7 h-7 text-[#FFC845] flex-shrink-0" />
                  <h3 className="text-xl font-bold text-dark-blue">Distance</h3>
                </div>
                <p className="text-gray-600 mb-3">Local moves within the Treasure Valley are charged by the hour. Long-distance moves are typically based on weight and mileage.</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Local (within 50 miles): Hourly rate</li>
                  <li>• Long-distance: Weight + mileage based</li>
                  <li>• Drive time between locations affects total hours</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-3 items-start mb-3">
                  <Users className="w-7 h-7 text-[#FFC845] flex-shrink-0" />
                  <h3 className="text-xl font-bold text-dark-blue">Crew Size</h3>
                </div>
                <p className="text-gray-600 mb-3">Bigger crews work faster but cost more per hour. We'll recommend the right size crew based on your needs.</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• 2-person crew: Smaller apartments, minimal furniture</li>
                  <li>• 3-person crew: Most common for houses</li>
                  <li>• 4+ person crew: Large homes, tight timelines</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-3 items-start mb-3">
                  <Clock className="w-7 h-7 text-[#FFC845] flex-shrink-0" />
                  <h3 className="text-xl font-bold text-dark-blue">Complexity</h3>
                </div>
                <p className="text-gray-600 mb-3">Certain things take extra time and care, which can add to the overall cost.</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Stairs, elevators, long carries</li>
                  <li>• Heavy or bulky items (pianos, safes, large furniture)</li>
                  <li>• Disassembly and reassembly</li>
                  <li>• Tight spaces, narrow doorways, tricky access</li>
                  <li>• Packing services (if you need us to pack for you)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Typical Price Ranges</h2>
            <p className="text-gray-600 mb-6">These are rough estimates for local moves in the Boise area. Your actual cost will depend on the factors above.</p>

            <div className="space-y-4 mb-12">
              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Studio / 1-Bedroom Apartment</h4>
                <p className="text-gray-700"><strong>Estimated Cost:</strong> $300 - $600</p>
                <p className="text-gray-600 text-sm mt-1">2-person crew, 2-4 hours</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">2-Bedroom Apartment or Small House</h4>
                <p className="text-gray-700"><strong>Estimated Cost:</strong> $600 - $1,200</p>
                <p className="text-gray-600 text-sm mt-1">3-person crew, 4-6 hours</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">3-Bedroom House</h4>
                <p className="text-gray-700"><strong>Estimated Cost:</strong> $1,200 - $2,000</p>
                <p className="text-gray-600 text-sm mt-1">3-4 person crew, 6-8 hours</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">4+ Bedroom House</h4>
                <p className="text-gray-700"><strong>Estimated Cost:</strong> $2,000 - $3,500+</p>
                <p className="text-gray-600 text-sm mt-1">4+ person crew, 8-12+ hours</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-8">
              <h3 className="font-bold text-dark-blue mb-3">How to Keep Costs Down</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Declutter before you move—less stuff = less time</li>
                <li>• Pack yourself if you're able</li>
                <li>• Disassemble furniture ahead of time</li>
                <li>• Move mid-week or mid-month (less demand, more availability)</li>
                <li>• Be ready when the crew arrives—clear pathways, everything packed and accessible</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">What's Included in Our Pricing</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Professional moving crew</li>
                <li>• Moving truck and fuel</li>
                <li>• Basic moving equipment (dollies, straps, blankets)</li>
                <li>• Furniture protection</li>
                <li>• Loading, transport, and unloading</li>
                <li>• No hidden fees or surprise charges</li>
              </ul>
            </div>

            <div className="mt-12 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Get an Accurate Quote</h2>
              <p className="text-gray-300 mb-6">These estimates are helpful, but every move is different. Call us for a real quote based on your specific situation.</p>
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
