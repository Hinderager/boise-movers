import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Interstate Moving Services Boise | Cross-State Movers',
  description: 'Professional interstate moving from Boise to anywhere in the U.S. Licensed, insured, and experienced with cross-state relocations. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-movers.com/services/long-distance/interstate',
  },
}

export default function InterstatePage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Interstate Moving Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional moving services for relocations across state lines.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving Across State Lines?</h2>
            <p>
              Interstate moves come with extra layers of complexity. You're dealing with different regulations, longer distances, and more logistics than a local move. It's not just about loading a truck—it's about coordinating timing, planning routes, and making sure everything arrives safely.
            </p>
            <p>
              We handle interstate moves all the time. Whether you're leaving Idaho or moving here from another state, we'll take care of the details so you don't have to.
            </p>

            <h2>Common Interstate Routes from Boise</h2>
            <p>
              We move people between states regularly. Some of the most popular routes include:
            </p>
            <ul>
              <li>Idaho to Washington (Seattle, Spokane, Vancouver)</li>
              <li>Idaho to Oregon (Portland, Eugene, Bend)</li>
              <li>Idaho to Utah (Salt Lake City, Provo, Park City)</li>
              <li>Idaho to Montana (Missoula, Bozeman, Billings)</li>
              <li>Idaho to Colorado (Denver, Colorado Springs, Boulder)</li>
              <li>Idaho to California (Bay Area, Sacramento, LA)</li>
              <li>Idaho to Arizona (Phoenix, Tucson, Flagstaff)</li>
              <li>Idaho to Nevada (Las Vegas, Reno)</li>
            </ul>
            <p>
              If your destination isn't listed, we still do it. These are just the most common.
            </p>

            <h2>How Interstate Moving Works</h2>
            <p>
              We start with a consultation to understand what you're moving and where it's going. We can do this over the phone, via video, or in person.
            </p>
            <p>
              From there, we give you a detailed quote based on the weight of your belongings and the distance. No hidden fees—you'll know the cost upfront.
            </p>
            <p>
              On moving day, we load everything carefully, secure it for the trip, and transport it to your new home. Once we arrive, we unload and place items where you want them.
            </p>

            <h2>How Long Does It Take?</h2>
            <p>
              It depends on how far you're going. Moves to neighboring states (like Washington or Utah) typically take 2-4 days. Longer distances can take a week or more, depending on the route and schedule.
            </p>
            <p>
              We'll give you a delivery window so you know when to expect us. Need it faster? We offer expedited service for time-sensitive moves.
            </p>

            <h2>What We Move Interstate</h2>
            <ul>
              <li>Full-house relocations (furniture, appliances, boxes)</li>
              <li>Partial loads (if you're not moving everything)</li>
              <li>Office relocations (desks, files, equipment)</li>
              <li>Specialty items (pianos, antiques, safes, artwork)</li>
            </ul>

            <h2>Packing for Interstate Moves</h2>
            <p>
              We can handle the packing for you, or you can pack yourself and we'll load and transport. Either way works.
            </p>
            <p>
              If you're packing, use sturdy boxes and pack fragile items carefully. Label everything clearly. We'll wrap furniture and larger items with blankets and padding to protect them during transit.
            </p>

            <h2>Insurance and Protection</h2>
            <p>
              We're licensed and insured for interstate moves. That means if something goes wrong, you're covered. We take care with your belongings, but knowing there's protection in place gives you peace of mind.
            </p>

            <h2>Why Choose Professional Interstate Movers?</h2>
            <p>
              Some people consider doing it themselves—renting a truck, loading it up, and driving across state lines. Here's the thing: it's exhausting, time-consuming, and often more expensive than you'd think.
            </p>
            <p>
              Between fuel costs, truck rental fees, lodging, meals, and time off work, the "savings" disappear fast. Plus, if something breaks or you get injured, you're on your own.
            </p>
            <p>
              With professional movers, you get experience, proper equipment, insurance, and someone else doing the heavy lifting. You can focus on settling into your new place instead of driving a moving truck across three states.
            </p>

            <h2>Ready to Move?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and let's talk about your interstate move. We'll answer your questions, give you a quote, and help you plan the details.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Free Interstate Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Call us for a detailed estimate on your cross-state move.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
