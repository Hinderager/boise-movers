import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Loading & Unloading Service | Professional Movers in Boise, ID',
  description: 'Need help loading and unloading your moving truck? We will handle both ends of your DIY move. Affordable service in Boise and Treasure Valley.',
  alternates: { canonical: 'https://boise-movers.com/services/loading-unloading/truck' },
}

export default function TruckPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Loading & Unloading Service in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">We'll load at your old place and unload at your new one</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Load and Unload-We'll Handle Both</h2>
            <p>
              Renting your own truck makes sense if you're comfortable driving it. But that doesn't mean you need to do all the heavy lifting yourself.
            </p>
            <p>
              We'll load your truck at your old place, and when you get to your new spot, we'll meet you there and unload. You just drive in between.
            </p>

            <h2>How It Works</h2>
            <p>
              You rent the truck and schedule us for the loading window. Our crew shows up, packs the truck tight, and you're on your way.
            </p>
            <p>
              When you arrive at your destination, give us a heads up and we'll send a crew to meet you. We'll unload everything and place it where you want it.
            </p>
            <p>
              It's basically a full-service move, except you're doing the driving.
            </p>

            <h2>Why People Choose This Option</h2>
            <p>
              It's cheaper than hiring movers to do the whole thing. You save money by driving yourself, but you still get professional help with the back-breaking part.
            </p>
            <p>
              It's also a good choice if you're moving a long distance and don't want to pay for the truck to drive empty from our location.
            </p>
            <p>
              Plus, some people just like being in control of the truck. You know your stuff's with you the whole time.
            </p>

            <h2>What About Long-Distance Moves?</h2>
            <p>
              If you're moving out of state or across Idaho, this is a great setup. We load your truck here in the Treasure Valley, you drive to wherever you're going, and you hire local movers on the other end to unload.
            </p>
            <p>
              Or if you're moving here from somewhere else, hire loaders at your old place and we'll unload when you get to Boise.
            </p>

            <h2>Pricing</h2>
            <p>
              We charge by the hour for both the loading and unloading. You're billed separately for each, since they're technically two different jobs.
            </p>
            <p>
              Tell us what you're moving and the size of the truck, and we'll give you an estimate for both ends.
            </p>

            <h2>Serving the Treasure Valley</h2>
            <p>
              We offer loading and unloading throughout Boise, Meridian, Eagle, Nampa, Caldwell, and surrounding areas. Whether you're coming or going, we're here to help.
            </p>
            <p>
              Call us to set up both jobs. We'll make sure you've got crews scheduled for loading day and unloading day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Book Your Loading & Unloading Service</h2>
          <p className="text-xl text-gray-300 mb-8">Get help on both ends of your move-call for a quote</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
