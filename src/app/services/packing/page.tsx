import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professional Packing Services Boise | Top Shelf Moving',
  description: 'Expert packing services for your move. We will pack everything safely and efficiently so you do not have to. Call (208) 768-3987 for packing help.',
  alternates: {
    canonical: 'https://boise-movers.com/services/packing',
  },
}

export default function PackingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Packing Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Let us pack your stuff so you don't have to. We'll do it right.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Hate Packing? We'll Do It for You</h2>
            <p>
              Packing is the worst part of moving. It takes forever, you never have enough boxes,
              and you're always second-guessing whether that lamp is going to survive the trip.
            </p>
            <p>
              Good news: you don't have to do it yourself. We'll pack everything for you-carefully, quickly,
              and with the right materials. Then we'll move it, and when you get to the new place,
              we can even unpack if you want.
            </p>

            <h2>What We Pack</h2>
            <p>Pretty much anything:</p>
            <ul>
              <li>Kitchen items (dishes, glassware, small appliances)</li>
              <li>Clothes and linens</li>
              <li>Books, electronics, and office supplies</li>
              <li>Fragile items like artwork, mirrors, and antiques</li>
              <li>Garage and storage room stuff</li>
            </ul>
            <p>If it needs to be moved, we can pack it.</p>

            <h2>We Bring All the Supplies</h2>
            <p>
              You don't need to hunt down boxes or buy rolls of bubble wrap. We bring everything:
              boxes in all sizes, packing paper, bubble wrap, tape, markers. We've done this enough times
              to know exactly what we'll need.
            </p>

            <h2>Full Pack or Partial Pack?</h2>
            <p>
              <strong>Full packing:</strong> We pack the entire house. You do nothing. This is the easiest option
              if you're short on time or just don't want to deal with it.
            </p>
            <p>
              <strong>Partial packing:</strong> We pack the tricky stuff-kitchen, fragile items, anything breakable-and
              you handle the easy boxes like clothes and linens. This saves you money but still gets the hard work done.
            </p>

            <h2>How Long Does It Take?</h2>
            <p>
              Depends on the size of your place and how much you have. A one-bedroom apartment? A few hours.
              A full house? Could be a full day or two. We'll give you a time estimate when we talk.
            </p>

            <h2>What About Unpacking?</h2>
            <p>
              We can unpack your boxes at the new place too. We'll put things in the right rooms,
              unwrap everything, and haul away all the packing materials when we're done. You just tell us where stuff goes.
            </p>

            <h2>Why Pay Someone to Pack?</h2>
            <p>
              Because your time is valuable. And because we're faster and better at it. What might take you
              two weekends of stress and frustration, we knock out in a day. Plus, when we pack it,
              we know it's going to survive the move.
            </p>

            <h2>Ready to Skip the Packing?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              let's talk about what you need packed. We'll give you a quote and get it done.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Packing Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Tell us what you need packed, and we'll give you an honest price.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
