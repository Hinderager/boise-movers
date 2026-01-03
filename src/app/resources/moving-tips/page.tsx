import { Metadata } from 'next'
import { Phone, CheckCircle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Moving Tips for Boise | Expert Moving Advice',
  description: 'Practical moving tips from professional Boise movers. Learn how to pack, organize, and make your move easier in the Treasure Valley.',
  alternates: { canonical: 'https://boise-movers.com/resources/moving-tips' },
}

export default function MovingTipsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Moving Tips</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Practical advice from professional movers who've done this thousands of times.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Moving doesn't have to be chaos. After helping families move all over Boise, Meridian, Nampa, and beyond, we've picked up a few things about what works and what doesn't.</p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4 flex items-center gap-3">
                  <Lightbulb className="w-7 h-7 text-[#FFC845]" />
                  Before You Pack
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Declutter first:</strong> Don't pack stuff you don't need. Moving is a perfect time to get rid of things you haven't used in years.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Start early:</strong> Start packing non-essentials a few weeks out. You'll thank yourself later.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Gather supplies:</strong> Boxes, tape, markers, bubble wrap. Buy more than you think you need.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Take photos:</strong> Before disassembling furniture or electronics, snap a quick photo so you remember how it goes back together.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Packing Like a Pro</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Pack by room:</strong> Keep everything from one room together. It makes unpacking way easier.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Label everything:</strong> Write what's in the box and what room it goes in. Use a marker, make it big and clear.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Heavy items in small boxes:</strong> Books and tools go in small boxes. Lighter stuff like pillows can go in big ones.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Protect the breakables:</strong> Wrap dishes and glassware individually. Use towels or clothes if you're short on bubble wrap.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Fill empty spaces:</strong> Crumpled paper or towels in the gaps keep things from shifting around.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Furniture & Large Items</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Disassemble what you can:</strong> Bed frames, tables, desks. Keep all the screws and hardware in a labeled baggie taped to the piece.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Empty everything:</strong> Dressers, desks, nightstands-empty them. It makes them lighter and safer to move.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Protect surfaces:</strong> Wrap furniture in blankets or plastic wrap to avoid scratches and dings.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Measure doorways:</strong> If you've got big pieces, measure doorways and hallways ahead of time to make sure they'll fit.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Moving Day</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Keep essentials separate:</strong> Phone chargers, medications, important documents, change of clothes. Put these in a bag you keep with you.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Be there or available:</strong> If you can't be present for the move, make sure we can reach you by phone.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Clear pathways:</strong> Make sure hallways, stairs, and doorways are clear so movers can work safely and efficiently.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Point out special items:</strong> If something is fragile, valuable, or needs extra care, let the crew know upfront.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Boise-Specific Tips</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Summer moves:</strong> It gets hot in Boise July through September. Have water on hand for yourself and the crew.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Winter moves:</strong> Snow and ice can make moves trickier. We handle it, but clear walkways if you can.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Apartment moves:</strong> If you're in a complex, reserve the elevator or loading area ahead of time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>North End homes:</strong> Lots of older homes with narrow stairs and tight corners. Let us know if access is tricky.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">After the Move</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Unpack essentials first:</strong> Beds, toiletries, kitchen basics. Get those set up before you tackle the rest.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Do a quick walkthrough:</strong> Check for any damage at the old or new place. Document it if needed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Update your address:</strong> USPS, banks, utilities, subscriptions. Get that done within the first week.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Take your time:</strong> You don't have to unpack everything in one day. Do it at your own pace.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Let Us Handle the Heavy Lifting</h2>
              <p className="text-gray-300 mb-6">You worry about the details. We'll handle getting everything from point A to point B.</p>
              <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 768-3987
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
