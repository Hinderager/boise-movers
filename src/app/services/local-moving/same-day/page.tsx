import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Same Day Moving Services Boise | Last-Minute Movers Treasure Valley',
  description: 'Need same-day moving services in Boise? We offer last-minute moving for apartments and houses throughout the Treasure Valley. Licensed and insured. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-movers.com/services/local-moving/same-day',
  },
}

export default function SameDayPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Same-Day Moving Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Need to move today? We offer last-minute moving services throughout the Treasure Valley.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Need to Move Right Now?</h2>
            <p>
              Sometimes life doesn't give you much notice. Maybe your lease ended sooner than you thought. Maybe a deal on a new place came through suddenly. Maybe you just need to get out-fast.
            </p>
            <p>
              We get it. And we can help.
            </p>
            <p>
              If you call us before noon and we have availability, there's a good chance we can get a crew out the same day. It's not guaranteed-it depends on our schedule-but we'll do our best to make it happen.
            </p>

            <h2>How Same-Day Moving Works</h2>
            <p>
              Call us as early in the day as possible. If we have a crew available, we'll give you a time window and a price estimate based on what you're moving.
            </p>
            <p>
              We charge by the hour for local moves, just like we do for scheduled moves. Same-day doesn't mean you pay extra-it just means we're fitting you in on short notice.
            </p>
            <p>
              Once we confirm availability, we'll show up, load your stuff, and get you moved. Simple as that.
            </p>

            <h2>What We Move Same-Day</h2>
            <ul>
              <li>Apartments and condos</li>
              <li>Small to medium-sized homes</li>
              <li>Storage unit transfers</li>
              <li>Furniture and appliance-only moves</li>
              <li>Emergency relocations</li>
            </ul>
            <p>
              If you've got a full house worth of stuff and need it moved today, we'll see what we can do. But smaller moves are easier to fit into the schedule on short notice.
            </p>

            <h2>When Should You Call?</h2>
            <p>
              The earlier in the day, the better. If you call at 8 AM, we've got a lot more flexibility than if you call at 4 PM.
            </p>
            <p>
              That said, if it's later in the day and you're in a bind, call anyway. Sometimes we have cancellations or finish jobs early, and we can squeeze you in.
            </p>

            <h2>What If We Can't Make It Same-Day?</h2>
            <p>
              If we're booked solid, we'll try to get you in first thing the next day. We'll do everything we can to help you out as quickly as possible.
            </p>

            <h2>Do You Pack Too?</h2>
            <p>
              We can, but here's the thing: packing takes time. If you need us to pack everything and move you the same day, that's going to take longer (and cost more).
            </p>
            <p>
              If you're trying to keep costs down and move fast, it helps if you've already packed (or are at least working on it). We'll load and transport everything-you just need to have it boxed up and ready to go.
            </p>
            <p>
              If packing is part of the problem, let us know. We'll figure something out.
            </p>

            <h2>What About Large or Heavy Items?</h2>
            <p>
              We move everything-couches, beds, refrigerators, washers, dryers, pianos, you name it. If it's heavy, awkward, or hard to move, we've got the equipment and experience to handle it.
            </p>
            <p>
              Same-day moves are no different in that regard. We bring the same trucks, tools, and crew that we'd bring for a scheduled move.
            </p>

            <h2>Why Do People Need Same-Day Moving?</h2>
            <p>
              Honestly, all kinds of reasons. Some common ones we've seen:
            </p>
            <ul>
              <li>Lease ended sooner than expected</li>
              <li>Found a new place and need to move in right away</li>
              <li>Eviction or emergency situation</li>
              <li>Bought or sold a house and the timing got tight</li>
              <li>Roommate situation changed suddenly</li>
              <li>Job relocation with short notice</li>
            </ul>
            <p>
              Whatever the reason, we're not here to judge. We're just here to help you get moved.
            </p>

            <h2>We Cover the Whole Treasure Valley</h2>
            <p>
              Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star-wherever you need to move in the area, we've got you covered. We know these cities well, so we can move fast and efficiently.
            </p>

            <h2>Tips for a Smooth Same-Day Move</h2>
            <p>
              If you know you're going to need same-day service, here's how to make it go as smoothly as possible:
            </p>
            <ul>
              <li>Call us early in the morning</li>
              <li>Pack as much as you can before we arrive</li>
              <li>Have everything ready to go (disconnected, empty, broken down)</li>
              <li>Clear a path from your front door to the truck</li>
              <li>Know what you're taking and what you're leaving behind</li>
            </ul>
            <p>
              The more prepared you are, the faster and cheaper the move will be.
            </p>

            <h2>Ready to Move Today?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> right now. We'll check our schedule, answer your questions, and do our best to get you moved today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need to Move Today?</h2>
          <p className="text-xl text-gray-300 mb-8">Call us now and we'll see if we can fit you in.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
