import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Apartment Moving Services Boise | Local Apartment Movers',
  description: 'Professional apartment moving services in Boise and the Treasure Valley. We handle stairs, elevators, and tight spaces. Licensed and insured. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-movers.com/services/local-moving/apartment',
  },
}

export default function ApartmentPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Apartment Moving Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional apartment moving services throughout the Treasure Valley.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving to or from an Apartment?</h2>
            <p>
              Apartment moves come with their own set of challenges. Stairs, elevators, narrow hallways, parking restrictions-there's always something to figure out. And if you're on the third floor with no elevator? That's a workout.
            </p>
            <p>
              We handle apartment moves every day. We know how to navigate tight spaces, manage building rules, and get your stuff moved efficiently. You focus on settling in-we'll handle the heavy lifting.
            </p>

            <h2>What We Move</h2>
            <ul>
              <li>Studio apartments</li>
              <li>One, two, and three-bedroom apartments</li>
              <li>Condos and lofts</li>
              <li>Townhomes and duplexes</li>
              <li>Furniture, appliances, and boxes</li>
              <li>Storage unit transfers</li>
            </ul>

            <h2>How Apartment Moving Works</h2>
            <p>
              We charge by the hour for local apartment moves. You get a crew (usually 2-3 movers) and a truck. We show up, load your stuff, drive it to your new place, and unload.
            </p>
            <p>
              Most apartment moves take 2-4 hours, depending on how much you have and how many floors we're dealing with. Smaller studios? Faster. Third-floor walk-up with no elevator? A bit longer.
            </p>
            <p>
              We'll give you an honest estimate when you call so you know what to expect.
            </p>

            <h2>What About Stairs and Elevators?</h2>
            <p>
              We handle both. If you're on an upper floor, we'll take the elevator if there is one. If not, we'll carry everything up (or down) the stairs.
            </p>
            <p>
              It takes a little longer when stairs are involved, but that's part of the job. We've got the equipment (dollies, straps, blankets) to make it go as smoothly as possible.
            </p>

            <h2>Do We Need to Reserve the Elevator?</h2>
            <p>
              Some apartment complexes require you to reserve the elevator or service elevator ahead of time. If that's the case at your building, just let us know and we'll work with you on timing.
            </p>
            <p>
              If there are any building-specific rules or restrictions (like loading dock hours or parking permits), give us a heads-up. We'll make sure we're following the rules.
            </p>

            <h2>What About Parking?</h2>
            <p>
              We'll park as close as possible to your building. If parking is tight or restricted, let us know ahead of time and we'll figure it out.
            </p>
            <p>
              If we need a parking permit or loading zone pass, that's something you'll usually get from your apartment management. Just confirm with them before moving day.
            </p>

            <h2>Do You Pack Too?</h2>
            <p>
              Yes. If you want us to pack your stuff, we can do that. We'll bring boxes, tape, bubble wrap, and everything else you need.
            </p>
            <p>
              Or, if you prefer to pack yourself, that's fine. We'll just handle the loading, transport, and unloading. Either way works.
            </p>

            <h2>What If I'm Moving Furniture Only?</h2>
            <p>
              That's fine. Not everyone needs help moving everything. If you just need help with the couch, bed, dresser, and heavy stuff, we can do that.
            </p>
            <p>
              You can move the small stuff yourself and leave the heavy lifting to us. We'll give you a quote based on what you actually need moved.
            </p>

            <h2>We Cover the Whole Treasure Valley</h2>
            <p>
              Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star-wherever you're moving in the area, we've got you covered. We know the apartment complexes around here, which makes things easier for everyone.
            </p>

            <h2>Why Hire Professional Apartment Movers?</h2>
            <p>
              You might be thinking about doing it yourself. After all, you don't have that much stuff, right?
            </p>
            <p>
              Here's the thing: even small moves are exhausting. Carrying boxes and furniture up and down stairs, wrestling a couch through a narrow hallway, loading a truck you're not used to driving-it adds up.
            </p>
            <p>
              By the time you rent a truck, buy supplies, and spend your whole day (or weekend) moving, you've probably spent more time and energy than it's worth. With professional movers, you're done in a few hours and you don't have to lift a thing.
            </p>

            <h2>Ready to Move?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and let's talk about your apartment move. We'll answer your questions, give you a price estimate, and get you on the schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Free Apartment Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Call us for fast, honest pricing on your apartment move.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
