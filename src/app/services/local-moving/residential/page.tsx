import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Moving Services Boise | House Movers Treasure Valley',
  description: 'Professional residential moving services in Boise. We move houses, condos, and townhomes throughout the Treasure Valley. Licensed and insured. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-movers.com/services/local-moving/residential',
  },
}

export default function ResidentialPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Residential Moving Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional house moving services for homes throughout the Treasure Valley.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving Your Home?</h2>
            <p>
              Whether you're moving into your first house, upgrading to something bigger, or downsizing, moving a home is a big job. There's furniture, appliances, boxes, and all the stuff you've accumulated over the years.
            </p>
            <p>
              We handle residential moves every day. From single-family homes to condos and townhomes, we'll get your belongings from one place to the next without the stress and hassle.
            </p>

            <h2>What We Move</h2>
            <ul>
              <li>Single-family homes (any size)</li>
              <li>Condos and townhomes</li>
              <li>Duplexes and multi-unit properties</li>
              <li>Furniture and appliances</li>
              <li>Boxes and personal belongings</li>
              <li>Pianos, antiques, and specialty items</li>
            </ul>

            <h2>How Residential Moving Works</h2>
            <p>
              We charge by the hour for local residential moves. You get a crew (usually 2-3 movers) and a truck. We show up on time, load your stuff carefully, drive it to your new home, and unload everything.
            </p>
            <p>
              Most residential moves take 3-6 hours, depending on the size of your home and how far we're going. We'll give you an honest estimate when you call so you know what to expect.
            </p>

            <h2>What About Large or Heavy Items?</h2>
            <p>
              We move everything. Couches, beds, dressers, refrigerators, washers, dryers-you name it. If you've got a piano, safe, or heavy antique furniture, we've handled those too.
            </p>
            <p>
              We bring the right equipment (dollies, straps, blankets) to protect your stuff and make the move go smoothly. No guessing, no improvising.
            </p>

            <h2>Do You Pack Too?</h2>
            <p>
              Yes. If you want us to pack, we can do that. We'll bring boxes, tape, bubble wrap, and everything else you need. Or, if you prefer to pack yourself, that's fine-we'll just handle the loading and transport.
            </p>
            <p>
              Either way works. Just let us know what you'd prefer when you call.
            </p>

            <h2>What About Stairs, Tight Hallways, and Tricky Access?</h2>
            <p>
              We deal with that stuff all the time. Narrow staircases, tight doorways, second-floor apartments-it's part of the job.
            </p>
            <p>
              If we need to take apart furniture to get it through a door, we'll do it. And we'll put it back together on the other end. No problem.
            </p>

            <h2>We Move Throughout the Treasure Valley</h2>
            <p>
              Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Garden City-wherever you're moving in the area, we've got you covered. We know these neighborhoods well, so we can plan the most efficient route and timeline.
            </p>

            <h2>Why Hire Professional Movers?</h2>
            <p>
              Some people think about doing it themselves. Rent a truck, grab some friends, and knock it out in a weekend, right?
            </p>
            <p>
              Here's the reality: moving a house yourself is exhausting. By the time you rent the truck, buy boxes and supplies, feed your helpers, and spend your entire weekend loading and unloading, you've probably spent more than you saved.
            </p>
            <p>
              Plus, there's the risk. If you drop something, hurt yourself, or damage the walls, you're responsible. With professional movers, you get experience, proper equipment, insurance, and people who do this for a living.
            </p>

            <h2>What Makes a Good Residential Move?</h2>
            <p>
              Good movers show up on time, handle your stuff carefully, and communicate throughout the process. We're not trying to rush through your move-we're trying to do it right.
            </p>
            <p>
              We'll wrap furniture, pad appliances, and make sure boxes are stacked securely in the truck. When we get to your new place, we'll unload and place items where you want them. No dropping boxes in a pile and leaving.
            </p>

            <h2>Ready to Schedule Your Move?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and let's talk about your residential move. We'll answer your questions, give you a price estimate, and get you on the schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Free Residential Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Call us for fast, honest pricing on your house move.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
