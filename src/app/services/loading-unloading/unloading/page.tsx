import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Unloading Service | Professional Movers in Boise, ID',
  description: 'Need help unloading your moving truck or container? We will unload everything and place it where you want. Fast service in Boise and Treasure Valley.',
  alternates: { canonical: 'https://boise-movers.com/services/loading-unloading/unloading' },
}

export default function UnloadingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Unloading Service in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">We'll unload your truck and get everything inside</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>You Made It-Now Let Us Unload</h2>
            <p>
              You drove the truck yourself and saved some cash. Great. But you're exhausted, you don't have a crew lined up, and that couch isn't going to carry itself up the stairs.
            </p>
            <p>
              We'll unload your truck, haul everything inside, and put it where you tell us. You can sit back and supervise instead of throwing out your back.
            </p>

            <h2>What's Included</h2>
            <p>
              Our crew unloads the truck, brings everything into your home or business, and places items in the right rooms. If you want the couch in the living room and boxes in the garage, just point us in the right direction.
            </p>
            <p>
              We'll also move furniture where you want it. If you change your mind halfway through, no problem-we'll shift things around.
            </p>
            <p>
              Heavy lifting, stairs, tight hallways-we handle it all. That's the whole point of hiring movers.
            </p>

            <h2>Works With Any Truck or Container</h2>
            <p>
              Doesn't matter if you rented from U-Haul, Penske, or Budget. Or if you used a PODS container or shipped a trailer. We'll unload whatever you pulled up in.
            </p>
            <p>
              Just make sure the truck's parked where we can access it easily, and we'll take care of the rest.
            </p>

            <h2>How Long Does It Take?</h2>
            <p>
              Most unloading jobs take 2-4 hours, depending on how much stuff you've got and how many flights of stairs we're dealing with.
            </p>
            <p>
              We charge by the hour with a minimum. We'll give you an estimate based on what you tell us about the load and your new place.
            </p>

            <h2>Serving the Treasure Valley</h2>
            <p>
              We unload trucks and containers all over Boise, Meridian, Eagle, Nampa, Caldwell, and everywhere in between. Whether you're moving into a house, apartment, or storage unit, we're ready to help.
            </p>
            <p>
              Call us when you know your arrival time, and we'll get a crew lined up.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Truck Unloaded Fast</h2>
          <p className="text-xl text-gray-300 mb-8">Focus on settling in while we do the heavy lifting</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
