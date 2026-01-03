import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Loading & Unloading Services Boise | Top Shelf Moving',
  description: 'Need help loading or unloading your rental truck? We provide professional labor to get the job done fast. Call (208) 768-3987 today.',
  alternates: {
    canonical: 'https://boise-movers.com/services/loading-unloading',
  },
}

export default function LoadingUnloadingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Loading & Unloading Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Got a truck but need help with the heavy lifting? We've got you.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Rented a Truck? We'll Load It</h2>
            <p>
              Maybe you got a good deal on a U-Haul. Maybe you're trying to save money by driving it yourself.
              Either way, loading and unloading that thing is hard work-and if you do it wrong, stuff breaks.
            </p>
            <p>
              That's where we help. You rent the truck, we load it (or unload it, or both).
              You get the cost savings of a DIY move without throwing out your back.
            </p>

            <h2>What We Do</h2>
            <ul>
              <li><strong>Loading:</strong> We'll carry everything from your house to the truck and pack it securely.</li>
              <li><strong>Unloading:</strong> We'll unload the truck and bring everything into your new place.</li>
              <li><strong>Both:</strong> Load at the old place, unload at the new one. You just drive.</li>
            </ul>

            <h2>We Know How to Pack a Truck</h2>
            <p>
              It's not just about throwing stuff in there. There's a method: heavy stuff on the bottom,
              lighter stuff on top, everything strapped down so nothing shifts during the drive.
              We've done this thousands of times. Your rental truck is in good hands.
            </p>

            <h2>What If I Don't Have a Truck Yet?</h2>
            <p>
              No problem. Rent a truck from U-Haul, Penske, Budget, or whoever you like. Book it for
              the day and time we're scheduled, and we'll be ready to load when you pull up.
            </p>
            <p>
              Not sure what size truck to rent? Call us-we can help you figure out what you need based
              on what you're moving.
            </p>

            <h2>How Long Does It Take?</h2>
            <p>
              Loading or unloading usually takes 2-4 hours, depending on how much you have and
              whether there are stairs. We'll give you an estimate when you call.
            </p>

            <h2>What About Moving Containers?</h2>
            <p>
              We load those too. PODS, U-Pack, 1-800-PACK-RAT-if you've got a container in your driveway,
              we can fill it up or empty it out. Same deal as a truck.
            </p>

            <h2>Why Not Just Ask Friends for Help?</h2>
            <p>
              You could. But your friends probably don't know how to lift a couch without scraping the walls,
              and they definitely don't have the equipment or experience we do. Plus, you'll still owe them
              pizza and beer-and maybe a chiropractor visit.
            </p>
            <p>
              We're fast, we're careful, and we do this every day. You'll save time and avoid the hassle.
            </p>

            <h2>Ready to Book?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              tell us when you need help. We'll give you a price and get you on the schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Quote for Loading or Unloading</h2>
          <p className="text-xl text-gray-300 mb-8">We'll give you an honest price and get the job done right.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
