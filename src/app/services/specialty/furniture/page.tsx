import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Furniture Moving Service | Professional Movers in Boise, ID',
  description: 'Need to move heavy furniture? We'll safely move couches, dressers, and more. Careful handling and protection for all your furniture in Boise.',
  alternates: { canonical: 'https://boise-movers.com/services/specialty/furniture' },
}

export default function FurniturePage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Furniture Moving Service in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">We'll move your heavy furniture safely and carefully</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving Furniture Is What We Do</h2>
            <p>
              Couches, dressers, beds, dining tables—furniture's heavy, awkward, and easy to damage if you don't know what you're doing.
            </p>
            <p>
              We move furniture for a living, so we've got the tools, the technique, and the muscle to get it done without scratching floors or dinging walls.
            </p>

            <h2>How We Protect Your Stuff</h2>
            <p>
              Everything gets wrapped. Couches go in protective covers, wood furniture gets blanket-wrapped, and glass tops are padded.
            </p>
            <p>
              We use dollies, straps, and sliders to move heavy pieces without dragging them across your floors. Door frames and corners get protected too.
            </p>
            <p>
              If something needs disassembling (like a bed frame or big sectional), we'll take it apart and put it back together at your new place.
            </p>

            <h2>Local and Long-Distance</h2>
            <p>
              Whether you're moving across Boise or across the state, we'll get your furniture there in one piece.
            </p>
            <p>
              For long hauls, everything's secured in the truck so it doesn't shift around during the drive. No loose items sliding around and banging into each other.
            </p>

            <h2>What If I'm Not Moving Everything?</h2>
            <p>
              Not a problem. We do single-item moves all the time. Bought a couch on Facebook Marketplace? Need to move a dresser upstairs? We'll come out and handle it.
            </p>
            <p>
              Pricing depends on what you're moving and how far. Give us the details and we'll give you a quote.
            </p>

            <h2>Stairs, Tight Hallways, and Other Fun Challenges</h2>
            <p>
              We've moved furniture up narrow staircases, around tight corners, and into apartments with narrow doorways. It's all part of the job.
            </p>
            <p>
              Sometimes it takes some creative maneuvering (or removing a door from its hinges), but we figure it out. If you're worried about a tricky spot, mention it when you call and we'll plan accordingly.
            </p>

            <h2>Available Throughout the Treasure Valley</h2>
            <p>
              We move furniture all over Boise, Meridian, Eagle, Nampa, Caldwell, and surrounding areas. Whether it's a full house or just a single piece, we've got you covered.
            </p>
            <p>
              Call us for a quote and let us know what you need moved.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Furniture Moved Right</h2>
          <p className="text-xl text-gray-300 mb-8">No scratches, no damage—just professional service</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
