import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Piano Moving Service | Professional Movers in Boise, ID',
  description: 'Expert piano moving in Boise. We safely move upright, grand, and baby grand pianos. Specialized equipment and careful handling guaranteed.',
  alternates: { canonical: 'https://boise-movers.com/services/specialty/piano' },
}

export default function PianoPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Piano Moving Service in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">We'll move your piano safely with specialized equipment and care</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Pianos Need Special Handling</h2>
            <p>
              Pianos are heavy, fragile, and expensive. Moving one isn't like moving a couch. One wrong move and you've got a damaged instrument worth thousands of dollars.
            </p>
            <p>
              We've moved hundreds of pianos, and we've got the right equipment and know-how to do it safely. Upright, grand, baby grand—we handle all types.
            </p>

            <h2>How We Move Pianos</h2>
            <p>
              First, we protect the piano with heavy-duty blankets and straps. The legs come off grand pianos, and everything's secured so nothing shifts.
            </p>
            <p>
              We use piano dollies and specialized equipment to move it without dragging or tipping. If there are stairs, we've got the gear to navigate them safely.
            </p>
            <p>
              At your new place, we reassemble everything (if needed) and put the piano exactly where you want it.
            </p>

            <h2>Why You Shouldn't DIY a Piano Move</h2>
            <p>
              Pianos weigh anywhere from 300 to 1,200 pounds, depending on the type. They're also awkwardly shaped and have delicate internal parts.
            </p>
            <p>
              Trying to move one yourself is a recipe for back injuries, damaged walls, or a wrecked piano. It's just not worth the risk when you can hire professionals.
            </p>

            <h2>Stairs and Tight Spaces</h2>
            <p>
              Moving a piano upstairs or through a narrow hallway takes planning and the right equipment. We've done it all—second-story apartments, basement music rooms, you name it.
            </p>
            <p>
              Sometimes we need to remove doors or railings to make it fit. We'll figure out the logistics ahead of time so there's no surprises on moving day.
            </p>

            <h2>Pricing</h2>
            <p>
              Piano moving is priced separately from regular household moves because it requires specialized equipment and extra care.
            </p>
            <p>
              The cost depends on the type of piano, how far we're moving it, and whether there are stairs involved. Give us the details and we'll give you a quote.
            </p>

            <h2>Serving the Treasure Valley</h2>
            <p>
              We move pianos all over Boise, Meridian, Eagle, Nampa, Caldwell, and surrounding areas. Whether you're moving across town or just need the piano repositioned in your home, we'll take care of it.
            </p>
            <p>
              Call us to schedule your piano move. We'll walk you through the process and answer any questions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Expert Piano Moving Help</h2>
          <p className="text-xl text-gray-300 mb-8">Your piano's in good hands—call for a quote today</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
