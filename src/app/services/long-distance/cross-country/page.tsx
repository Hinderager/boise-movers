import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cross Country Moving Services from Boise | Coast to Coast Movers',
  description: 'Professional cross-country moving from Boise to anywhere in the U.S. Experienced with coast-to-coast relocations. Licensed and insured. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-movers.com/services/long-distance/cross-country',
  },
}

export default function CrossCountryPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Cross-Country Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional moving services for coast-to-coast relocations and long-haul moves.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving Coast to Coast?</h2>
            <p>
              Cross-country moves are a big deal. You're not just moving to the next state-you're relocating across multiple time zones, climates, and thousands of miles. There's a lot to coordinate, and getting your stuff there safely requires planning and experience.
            </p>
            <p>
              We handle cross-country moves regularly. Whether you're headed to the East Coast, West Coast, or somewhere in between, we'll get your belongings there in one piece.
            </p>

            <h2>What Is a Cross-Country Move?</h2>
            <p>
              Generally, we're talking about moves over 1,000 miles or more. That includes relocations like Boise to New York, Boise to Florida, or Boise to California.
            </p>
            <p>
              These moves take more time, more logistics, and more care than shorter hauls. But if you're making the move, you already know that.
            </p>

            <h2>Popular Cross-Country Routes</h2>
            <p>
              We move people all over the country, but here are some of the most common routes from Boise:
            </p>
            <ul>
              <li>Boise to California (Los Angeles, San Francisco, San Diego)</li>
              <li>Boise to Texas (Austin, Dallas, Houston, San Antonio)</li>
              <li>Boise to Florida (Tampa, Orlando, Miami, Jacksonville)</li>
              <li>Boise to New York (NYC, Buffalo, Albany)</li>
              <li>Boise to North Carolina (Charlotte, Raleigh, Asheville)</li>
              <li>Boise to Georgia (Atlanta, Savannah, Athens)</li>
              <li>Boise to Illinois (Chicago and suburbs)</li>
              <li>Boise to Massachusetts (Boston, Cambridge, Worcester)</li>
            </ul>
            <p>
              Don't see your destination? We go everywhere. These are just the ones we do most often.
            </p>

            <h2>How Cross-Country Moving Works</h2>
            <p>
              We start with a detailed consultation. You tell us what you're moving and where it's going, and we'll give you an accurate quote based on the weight and distance.
            </p>
            <p>
              On moving day, we load your stuff carefully, secure it for the long haul, and hit the road. Your belongings stay in our care until they arrive at your new home, where we unload and place everything where you want it.
            </p>

            <h2>How Long Does It Take?</h2>
            <p>
              Cross-country moves typically take 7-14 days, depending on the distance and route. We'll give you a delivery window so you know when to expect us.
            </p>
            <p>
              If you need it faster, we offer expedited service. It costs more, but it's an option if timing is tight.
            </p>

            <h2>What We Move</h2>
            <ul>
              <li>Full household relocations (everything you own)</li>
              <li>Partial loads (if you're downsizing or not moving everything)</li>
              <li>Office equipment and business relocations</li>
              <li>Specialty items (pianos, antiques, artwork, gym equipment)</li>
              <li>Vehicles (we can coordinate auto transport if needed)</li>
            </ul>

            <h2>Packing for a Cross-Country Move</h2>
            <p>
              Your stuff is going to spend a lot of time on the road. That means it needs to be packed carefully.
            </p>
            <p>
              We can handle the packing for you-boxes, bubble wrap, blankets, the whole thing. Or, if you prefer to pack yourself, we'll load and transport everything safely.
            </p>
            <p>
              Either way, we use blankets, straps, and padding to keep things secure during the trip. Nothing gets thrown around or damaged.
            </p>

            <h2>Why Hire Professional Movers?</h2>
            <p>
              You might be thinking about renting a truck and doing it yourself. After all, how hard can it be?
            </p>
            <p>
              Here's the reality: driving a 26-foot moving truck across the country is exhausting. You'll spend days behind the wheel, paying for gas, lodging, and meals. If something breaks, you're responsible. If you get hurt loading or unloading, there's no backup plan.
            </p>
            <p>
              With professional movers, you get licensed drivers, proper equipment, insurance, and people who do this for a living. You can fly to your new home and settle in while we handle the logistics.
            </p>

            <h2>Insurance and Protection</h2>
            <p>
              We're licensed and insured for long-haul moves. That means if something gets damaged, you're covered. We take every precaution to protect your belongings, but knowing there's insurance in place gives you peace of mind.
            </p>

            <h2>Ready to Plan Your Cross-Country Move?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and let's talk about your move. We'll answer your questions, give you a detailed quote, and help you figure out the logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Free Cross-Country Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Call us for a detailed estimate on your long-distance move.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
