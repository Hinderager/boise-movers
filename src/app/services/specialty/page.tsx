import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Specialty Moving Services Boise | Pianos, Antiques, Seniors',
  description: 'Specialty moving services for items that need extra care. Pianos, antiques, heavy furniture, senior moves, and more. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-movers.com/services/specialty',
  },
}

export default function SpecialtyPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Specialty Moving Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">For the stuff that needs extra care and experience.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Some Things Just Need Extra Care</h2>
            <p>
              Most moving companies can handle boxes and couches. But what about your grandma's antique dresser?
              Or that 800-pound piano sitting in your living room? Or the gun safe that's basically a small vault?
            </p>
            <p>
              That's where specialty moving comes in. We've moved all kinds of stuff that makes regular movers nervous.
              If it's heavy, fragile, valuable, or just plain tricky, we've probably done it before.
            </p>

            <h2>What We Move</h2>
            <h3>Pianos</h3>
            <p>
              Pianos are expensive, delicate, and ridiculously heavy. We've got the right equipment and
              know-how to move uprights, baby grands, and full concert grands without damaging them
              (or your floors, walls, or doorframes).
            </p>

            <h3>Antiques and Fine Furniture</h3>
            <p>
              Heirloom furniture, antique dressers, china cabinets-things that can't just be replaced if they get scratched
              or broken. We wrap them properly and handle them with care.
            </p>

            <h3>Heavy Furniture and Appliances</h3>
            <p>
              Gun safes, pool tables, industrial equipment, commercial refrigerators-if it weighs more than two people
              should be lifting, we'll bring the right tools and extra help.
            </p>

            <h3>Artwork and Mirrors</h3>
            <p>
              Large paintings, framed art, mirrors-anything that's fragile and won't fit in a regular box.
              We've got specialty crates and packing materials for this kind of stuff.
            </p>

            <h3>Senior Moving Services</h3>
            <p>
              Moving when you're older is stressful. We get that. We'll work at a comfortable pace,
              handle everything carefully, and help set up the new place so it feels like home. We've
              helped a lot of seniors downsize or transition to assisted living, and we know how to make it easier.
            </p>

            <h2>How Is This Different from a Regular Move?</h2>
            <p>
              Specialty moves take more planning and preparation. We might need extra equipment-piano dollies,
              lift straps, custom crating. We'll talk through the details ahead of time so we show up ready.
            </p>

            <h2>Do You Move Just One Item?</h2>
            <p>
              Yep. If you just need to move a piano or a gun safe, we can do that. You don't have to be moving
              your whole house. Call us, tell us what you need moved, and we'll give you a quote.
            </p>

            <h2>Can You Move Something Up or Down Stairs?</h2>
            <p>
              Absolutely. Stairs make things harder, but we've got the experience and equipment to handle it.
              Just let us know what we're dealing with when you call.
            </p>

            <h2>What If My Item Is Really Valuable?</h2>
            <p>
              We're insured, and we take this stuff seriously. If you've got something particularly valuable or
              irreplaceable, let us know up front. We can take extra precautions-custom crating, additional insurance,
              whatever makes sense.
            </p>

            <h2>Ready to Move Something Special?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              describe what you need moved. We'll ask a few questions, give you a quote, and make sure we're
              prepared when we show up.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help Moving Something Special?</h2>
          <p className="text-xl text-gray-300 mb-8">We've handled it all. Tell us what you need moved.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
