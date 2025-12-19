import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Loading Service | Professional Movers in Boise, ID',
  description: 'Need help loading your moving truck or container? Our crew will safely load everything for you. Fast, affordable service in Boise and Treasure Valley.',
  alternates: { canonical: 'https://boise-movers.com/services/loading-unloading/loading' },
}

export default function LoadingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Loading Service in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">We'll load your truck or container quickly and safely</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Let Us Load Your Truck</h2>
            <p>
              You rented a U-Haul or PODS container to save money. Smart move. But now you're staring at a pile of boxes and furniture wondering how it's all going to fit.
            </p>
            <p>
              That's where we come in. Our crew shows up, loads everything properly, and you drive away. No back pain, no damaged furniture, no wasted hours trying to play Tetris with a couch.
            </p>

            <h2>Why Hire Professional Loaders</h2>
            <p>
              Loading a truck isn't just about stuffing things in. There's a method to it. Heavy stuff goes on bottom, weight gets distributed evenly, and fragile items go where they won't get crushed.
            </p>
            <p>
              We load trucks every day, so we know how to pack tight without damaging anything. Your stuff arrives in the same condition it left.
            </p>
            <p>
              Plus, we're fast. What would take you and some friends all day, we can knock out in a few hours.
            </p>

            <h2>What We Load</h2>
            <p>
              Rental trucks (U-Haul, Penske, Budget), moving containers (PODS, U-Pack, SMARTBOX), and shipping containers. Basically anything that needs loading.
            </p>
            <p>
              We handle furniture, appliances, boxes-the whole deal. If you've got something especially heavy or awkward, let us know ahead of time so we bring extra hands.
            </p>

            <h2>How Much Does It Cost?</h2>
            <p>
              We charge by the hour with a minimum. The price depends on how much stuff you have and how many guys you need.
            </p>
            <p>
              Most jobs take 2-4 hours. We'll give you an honest estimate upfront so there's no surprises.
            </p>

            <h2>Available Across the Treasure Valley</h2>
            <p>
              We offer loading service throughout Boise, Meridian, Eagle, Nampa, Caldwell, and the surrounding area. If you're renting a truck and need it loaded, we're here to help.
            </p>
            <p>
              Give us a call with your details-what you're moving, what size truck, and when you need it loaded. We'll get you scheduled.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Book Your Loading Service</h2>
          <p className="text-xl text-gray-300 mb-8">Get your truck loaded by professionals and hit the road</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
