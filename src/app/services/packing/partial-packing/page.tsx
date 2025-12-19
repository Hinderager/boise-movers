import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partial Packing Service | Professional Movers in Boise, ID',
  description: 'Need help packing just the tricky stuff? We will pack your fragile items, kitchen, or any room you choose. Flexible packing service in Boise.',
  alternates: { canonical: 'https://boise-movers.com/services/packing/partial-packing' },
}

export default function PartialPackingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Partial Packing Service in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">We'll pack the hard stuff while you handle the rest</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Pack What You Want, We'll Do the Rest</h2>
            <p>
              Maybe you're fine boxing up clothes and books, but you're nervous about packing grandma's china. Or you've run out of time and just need help finishing up.
            </p>
            <p>
              That's what partial packing's for. You choose what we pack, and we'll handle it with the same care as a full pack job.
            </p>

            <h2>What People Usually Need Help With</h2>
            <p>
              The kitchen's the big one. Packing dishes, glasses, and small appliances takes forever, and nobody wants broken plates. We can knock out your whole kitchen in a few hours.
            </p>
            <p>
              Artwork and mirrors are another popular request. These need special wrapping and sturdy boxes to make it in one piece.
            </p>
            <p>
              Some folks do most of the packing themselves but want us to come in at the end to pack up fragile stuff or awkward items like lamps and electronics.
            </p>

            <h2>How It Saves You Money</h2>
            <p>
              Partial packing costs less than full service because we're only packing part of your stuff. You handle the easy stuff on your own time, and we take care of what you don't want to deal with.
            </p>
            <p>
              It's a good middle ground if you're on a budget but still want professional help with the tricky items.
            </p>

            <h2>Completely Flexible</h2>
            <p>
              Tell us what you need packed-could be one room, a few boxes of breakables, or anything in between. We'll bring the right supplies and get it done.
            </p>
            <p>
              If you're doing most of the packing yourself, we can also show up on moving day and pack up any last-minute stuff you didn't get to.
            </p>

            <h2>Available Throughout the Treasure Valley</h2>
            <p>
              We offer partial packing in Boise, Meridian, Eagle, Nampa, Caldwell, and everywhere in between. Whether it's a single room or half your house, we're ready to help.
            </p>
            <p>
              Give us a call and let us know what you're thinking. We'll give you a straightforward quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Help With Your Packing</h2>
          <p className="text-xl text-gray-300 mb-8">Tell us what you need packed and we'll take care of it</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
