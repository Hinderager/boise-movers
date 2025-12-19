import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Full Packing Service | Professional Movers in Boise, ID',
  description: 'Let our expert packers handle everything. We pack your entire home or office safely and efficiently. Free estimates in Boise and Treasure Valley.',
  alternates: { canonical: 'https://boise-movers.com/services/packing/full-packing' },
}

export default function FullPackingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Full Packing Service in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">We'll pack everything so you don't have to lift a finger</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Let Us Handle the Packing</h2>
            <p>
              Moving's stressful enough without spending weeks wrapping dishes and boxing up your life. That's why we offer full packing service.
            </p>
            <p>
              Our crew shows up with all the supplies and gets everything packed, labeled, and ready to go. You can focus on other things while we handle the tedious work.
            </p>

            <h2>What's Included</h2>
            <p>
              When you choose full packing, we literally pack everything. Kitchen, bedrooms, garage, attic-all of it.
            </p>
            <p>
              We bring boxes, tape, bubble wrap, and packing paper. Fragile items get extra protection. Dishes are individually wrapped. Electronics are cushioned properly.
            </p>
            <p>
              Everything's labeled so you know what's in each box and which room it goes in. Makes unpacking way easier.
            </p>

            <h2>Who This Is For</h2>
            <p>
              Full packing's perfect if you're short on time, dealing with a big move, or just don't want the hassle. It's popular with busy professionals, families with young kids, and anyone who'd rather pay someone else to do the grunt work.
            </p>
            <p>
              It's also great if you've got a lot of breakables. Our team knows how to pack china cabinets and crystal collections without breaking anything.
            </p>

            <h2>How It Works</h2>
            <p>
              We'll come out and do a quick walkthrough to see what needs packing. Then we'll give you an estimate.
            </p>
            <p>
              On packing day, our crew arrives with everything needed. Depending on the size of your place, we can usually pack a whole house in a day or two.
            </p>
            <p>
              Then on moving day, we load up and haul everything to your new place. If you want, we can even unpack for you.
            </p>

            <h2>Serving the Treasure Valley</h2>
            <p>
              We pack homes and businesses all over Boise, Meridian, Eagle, Nampa, and Caldwell. Whether you're moving across town or across the state, we've got you covered.
            </p>
            <p>
              Call us for a free estimate. We'll walk you through pricing and answer any questions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Free Packing Estimate</h2>
          <p className="text-xl text-gray-300 mb-8">Let's talk about your move and give you an honest quote</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
