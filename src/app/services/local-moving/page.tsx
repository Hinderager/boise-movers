import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Local Moving Services Boise | Top Shelf Moving',
  description: 'Professional local moving services in Boise and the Treasure Valley. Licensed, insured movers for apartments, houses, and businesses. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-movers.com/services/local-moving',
  },
}

export default function LocalMovingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Local Moving Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional moving services for homes and businesses throughout the Treasure Valley.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving Locally in Boise?</h2>
            <p>
              You'd think moving across town would be simple. But between packing everything you own, renting a truck,
              wrangling friends to help, and praying nothing breaks—it gets complicated fast.
            </p>
            <p>
              That's where we come in. We handle local moves all day, every day. You tell us where and when,
              and we'll make sure your stuff gets there in one piece.
            </p>

            <h2>What We Move</h2>
            <ul>
              <li>Apartments and condos</li>
              <li>Single-family homes</li>
              <li>Small offices and retail spaces</li>
              <li>Storage unit transfers</li>
              <li>Furniture and appliances only (if that's all you need)</li>
            </ul>

            <h2>How Local Moving Works</h2>
            <p>
              We charge by the hour for local moves. You get a crew (usually 2-3 guys) and a truck.
              We show up on time, load your stuff carefully, drive it to the new place, and unload.
              That's it.
            </p>
            <p>
              Most local moves take 3-5 hours, depending on how much you have and how far we're going.
              We'll give you an honest estimate when you call.
            </p>

            <h2>We Cover the Whole Treasure Valley</h2>
            <p>
              Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star—wherever you're moving in the area, we've got you covered.
              We know these cities well, which means less time driving and more efficiency for you.
            </p>

            <h2>Why Hire Us Instead of Doing It Yourself?</h2>
            <p>Here's the thing: DIY moves sound cheaper until you add it all up.</p>
            <p>
              Truck rental, gas, boxes, tape, bubble wrap, pizza for the friends who "owe you one"—plus your time,
              your energy, and the risk of dropping that couch down the stairs. By the time you're done,
              you might've saved a hundred bucks but lost your whole weekend.
            </p>
            <p>
              We bring the equipment, the experience, and the muscle. You get your time back and way less stress.
            </p>

            <h2>Ready to Move?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              let's talk about your move. We'll answer your questions, give you a price estimate, and get you on the schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Free Estimate</h2>
          <p className="text-xl text-gray-300 mb-8">Call us for fast, honest pricing on your local move.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
