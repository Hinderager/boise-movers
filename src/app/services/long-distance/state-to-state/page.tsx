import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'State to State Moving Services | Professional Interstate Movers Boise',
  description: 'Professional state-to-state moving services from Boise. Experienced with interstate relocations throughout the U.S. Licensed and insured. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-movers.com/services/long-distance/state-to-state',
  },
}

export default function StateToStatePage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">State-to-State Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional moving services for interstate relocations across the country.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Relocating to a New State?</h2>
            <p>
              Moving between states is different from moving across town. You're dealing with longer distances, different regulations, and more complexity. It's not just about getting your stuff from point A to point B-it's about coordinating timing, protecting your belongings for a long haul, and making sure everything arrives safely.
            </p>
            <p>
              We handle state-to-state moves all the time. Whether you're leaving Idaho or moving here from somewhere else, we'll take care of the logistics so you can focus on settling in.
            </p>

            <h2>Where We Move</h2>
            <p>
              We move people between states regularly. Here are some of the most common routes:
            </p>
            <ul>
              <li>Idaho to Washington, Oregon, or Montana</li>
              <li>Idaho to Utah, Nevada, or Arizona</li>
              <li>Idaho to Colorado or Wyoming</li>
              <li>Idaho to California (Northern or Southern)</li>
              <li>Idaho to Texas or Oklahoma</li>
              <li>Idaho to the Midwest (Illinois, Ohio, Michigan)</li>
              <li>Idaho to the South (Tennessee, Georgia, Florida, North Carolina)</li>
              <li>Idaho to the East Coast (New York, Massachusetts, Virginia)</li>
            </ul>
            <p>
              If you're moving to a state not listed here, we still do it. These are just the routes we handle most often.
            </p>

            <h2>How State-to-State Moving Works</h2>
            <p>
              We start with a consultation-either over the phone, via video, or in person. You tell us what you're moving and where it's going, and we'll give you a detailed quote.
            </p>
            <p>
              Unlike local moves (which charge by the hour), state-to-state moves are priced based on the weight of your belongings and the distance. We'll give you an upfront cost so there are no surprises.
            </p>
            <p>
              On moving day, we load everything carefully, secure it for the trip, and transport it to your new home. Once we arrive, we unload and place items where you want them.
            </p>

            <h2>How Long Does It Take?</h2>
            <p>
              It depends on the distance. Moves to neighboring states (like Washington or Utah) typically take 2-5 days. Longer moves (like Idaho to Florida or New York) can take 7-14 days.
            </p>
            <p>
              We'll give you a delivery window so you know when to expect us. If you need it there faster, we offer expedited service for time-sensitive moves.
            </p>

            <h2>What We Move</h2>
            <ul>
              <li>Full household relocations (furniture, appliances, boxes, everything)</li>
              <li>Partial loads (if you're not moving everything)</li>
              <li>Office and business relocations (desks, files, equipment)</li>
              <li>Specialty items (pianos, antiques, safes, gym equipment, artwork)</li>
            </ul>

            <h2>Packing for a State-to-State Move</h2>
            <p>
              We can handle the packing for you-boxes, bubble wrap, blankets, tape, the whole thing. Or, if you prefer to pack yourself, we'll load and transport everything safely.
            </p>
            <p>
              Either way, we use blankets, straps, and padding to protect your belongings during transit. Nothing gets thrown around or damaged.
            </p>
            <p>
              If you're packing yourself, use sturdy boxes and pack fragile items carefully. Label everything clearly so we know what's inside.
            </p>

            <h2>Insurance and Protection</h2>
            <p>
              We're licensed and insured for state-to-state moves. That means if something goes wrong, you're covered. We take care with your belongings, but knowing there's protection in place gives you peace of mind.
            </p>

            <h2>Why Choose Professional Movers?</h2>
            <p>
              Some people consider renting a truck and doing it themselves. But here's what that really involves:
            </p>
            <ul>
              <li>Driving a large moving truck across state lines (often for days)</li>
              <li>Paying for fuel, lodging, meals, and truck rental</li>
              <li>Loading and unloading everything yourself (or convincing friends to help)</li>
              <li>Taking time off work and dealing with the physical strain</li>
              <li>Being responsible if something breaks or gets damaged</li>
            </ul>
            <p>
              By the time you add it all up, the "savings" often disappear. With professional movers, you get experience, proper equipment, insurance, and someone else doing the heavy lifting. You can fly to your new home and settle in while we handle the logistics.
            </p>

            <h2>What Makes a Good State-to-State Move?</h2>
            <p>
              Good movers communicate. We'll keep you updated throughout the process-when we're loading, when we're on the road, and when we'll arrive.
            </p>
            <p>
              We'll also be upfront about costs, timing, and what to expect. No surprises, no hidden fees, no runarounds.
            </p>

            <h2>Ready to Move?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and let's talk about your state-to-state move. We'll answer your questions, give you a detailed quote, and help you plan the details.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Free State-to-State Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Call us for a detailed estimate on your interstate move.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
