import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Long Distance Moving Services | Top Shelf Moving Boise',
  description: 'Professional long-distance moving services from Boise. Interstate, cross-country, and state-to-state moves. Licensed and insured. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-movers.com/services/long-distance',
  },
}

export default function LongDistancePage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Long Distance Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional moving services for interstate, cross-country, and state-to-state relocations.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving Out of Idaho?</h2>
            <p>
              Long-distance moves are a different beast than moving across town. You're not just packing and driving-you're coordinating timing, planning routes, protecting your stuff for hundreds (or thousands) of miles, and hoping everything arrives intact.
            </p>
            <p>
              We handle long-distance moves regularly. Whether you're relocating for work, family, or just ready for a change, we'll get your belongings there safely.
            </p>

            <h2>What Counts as Long Distance?</h2>
            <p>
              Generally, any move over 100 miles or across state lines. That includes moving from Boise to Seattle, Denver, Phoenix, or anywhere else outside the Treasure Valley.
            </p>
            <p>
              If you're moving within Idaho but it's a longer haul-like Boise to Coeur d'Alene or Twin Falls-that falls under long-distance too.
            </p>

            <h2>How Long-Distance Moves Work</h2>
            <p>
              Unlike local moves (which charge by the hour), long-distance moves are priced based on the weight of your stuff and how far it's going.
            </p>
            <p>
              We'll do a walkthrough (either in person or virtually) to get an idea of what you're moving. From there, we'll give you a detailed quote that covers loading, transport, and unloading on the other end.
            </p>
            <p>
              You'll know the cost upfront. No surprise charges when we show up.
            </p>

            <h2>What We Move</h2>
            <ul>
              <li>Household goods (furniture, appliances, boxes)</li>
              <li>Office equipment and files</li>
              <li>Vehicles (in some cases, we can coordinate auto transport)</li>
              <li>Pianos, antiques, and specialty items</li>
            </ul>

            <h2>Packing and Protection</h2>
            <p>
              Your stuff is going to spend time on the road. We pack everything carefully-blankets, straps, and padding to keep things from shifting or getting damaged.
            </p>
            <p>
              If you'd rather pack yourself, that's fine too. Just make sure boxes are sturdy and labeled. We'll handle the heavy lifting and the logistics.
            </p>

            <h2>Timing and Scheduling</h2>
            <p>
              Long-distance moves usually take a few days to a couple of weeks, depending on distance and route. We'll give you a delivery window so you know when to expect us.
            </p>
            <p>
              Need it there faster? We offer expedited service for an additional fee. Just let us know when you call.
            </p>

            <h2>Popular Routes from Boise</h2>
            <p>
              We move people all over the country, but some of the most common destinations are:
            </p>
            <ul>
              <li>Boise to Portland or Seattle (Pacific Northwest)</li>
              <li>Boise to Salt Lake City or Denver (Mountain West)</li>
              <li>Boise to Phoenix or Las Vegas (Southwest)</li>
              <li>Boise to California (Bay Area, LA, San Diego)</li>
              <li>Boise to Texas (Austin, Dallas, Houston)</li>
            </ul>
            <p>
              If your destination isn't listed, don't worry. We handle moves to all 50 states.
            </p>

            <h2>Why Hire Professional Movers?</h2>
            <p>
              Renting a U-Haul and driving across state lines might sound like the cheaper option. But between gas, lodging, meals, time off work, and the physical strain, it adds up fast.
            </p>
            <p>
              Plus, if something breaks or gets damaged, you're on your own. With us, you get licensed and insured movers, proper equipment, and experience handling long-haul moves safely.
            </p>

            <h2>Ready to Plan Your Move?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and let's talk about where you're headed. We'll answer your questions, walk through the details, and get you a quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Free Long-Distance Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Call us for a detailed estimate on your long-distance move.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
