import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Senior Moving Service | Professional Movers in Boise, ID',
  description: 'Compassionate moving help for seniors in Boise. We'll handle the heavy lifting and work at your pace. Downsizing and relocation assistance available.',
  alternates: { canonical: 'https://boise-movers.com/services/specialty/senior' },
}

export default function SeniorPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Senior Moving Service in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Patient, respectful help for seniors and their families</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving Is Hard—Especially for Seniors</h2>
            <p>
              Leaving a home you've lived in for decades is emotional. Add in the physical demands of packing and moving, and it gets overwhelming fast.
            </p>
            <p>
              We work with seniors and their families all the time. We know this isn't just about hauling boxes. It's about making a big transition as smooth and stress-free as possible.
            </p>

            <h2>What Makes Senior Moves Different</h2>
            <p>
              We take our time. There's no rushing. If you need to stop and think about where something should go, we wait.
            </p>
            <p>
              We're patient with decisions. Moving to a smaller place means choosing what to bring and what to leave behind. That's tough, and we get it.
            </p>
            <p>
              We're also careful with sentimental items. We know that dresser isn't just furniture—it might be something that's been in the family for generations.
            </p>

            <h2>Downsizing Help</h2>
            <p>
              Moving from a house to an apartment or assisted living facility usually means downsizing. Not everything fits, and figuring out what goes where is stressful.
            </p>
            <p>
              We can help sort through things and decide what's coming along. If there's furniture or belongings that aren't making the move, we can haul them away or help coordinate donations.
            </p>

            <h2>We Work With Families</h2>
            <p>
              Often it's adult children coordinating the move while their parents adjust to the idea. We're used to working with multiple people making decisions.
            </p>
            <p>
              If you're helping a parent or grandparent move, we'll keep everyone in the loop and make sure things go smoothly.
            </p>

            <h2>Local and Long-Distance</h2>
            <p>
              Whether you're moving across Boise or across the country, we'll handle the local part. If it's a long-distance move, we can coordinate with long-haul movers or storage facilities.
            </p>

            <h2>Serving the Treasure Valley</h2>
            <p>
              We help seniors move throughout Boise, Meridian, Eagle, Nampa, Caldwell, and surrounding areas. Whether it's into a retirement community, assisted living, or just a smaller home, we're here to help.
            </p>
            <p>
              Give us a call and let's talk through what you need. We'll walk you through the process and answer any questions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Compassionate Moving Help</h2>
          <p className="text-xl text-gray-300 mb-8">We'll handle the heavy lifting so you can focus on what matters</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
