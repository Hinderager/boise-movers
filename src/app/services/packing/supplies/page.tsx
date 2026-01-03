import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Packing Supplies | Moving Boxes & Materials in Boise, ID',
  description: 'Need boxes, tape, and packing materials? We sell quality moving supplies in Boise. Get everything you need for a safe move.',
  alternates: { canonical: 'https://boise-movers.com/services/packing/supplies' },
}

export default function SuppliesPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Packing Supplies in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Quality boxes, tape, and materials for your move</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Everything You Need to Pack Right</h2>
            <p>
              Packing with random boxes from the grocery store is a gamble. Weak boxes fall apart, and you end up with broken stuff.
            </p>
            <p>
              We sell the same heavy-duty packing supplies our crews use every day. These are real moving boxes, not flimsy cardboard that barely holds together.
            </p>

            <h2>What We Have</h2>
            <p>
              We stock all the basics: small, medium, and large boxes. We've also got wardrobe boxes for hanging clothes and dish packs for kitchenware.
            </p>
            <p>
              Plus all the extras you'll need-packing tape, bubble wrap, packing paper, and markers for labeling. You can grab everything in one stop instead of running all over town.
            </p>
            <p>
              If you're not sure what you need or how many boxes, just give us a call. We can estimate based on the size of your place.
            </p>

            <h2>Why Good Supplies Matter</h2>
            <p>
              Cheap boxes crush under weight. That's how dishes break and belongings get damaged.
            </p>
            <p>
              Our boxes are thick, double-walled, and designed to stack without collapsing. They've got handles that don't rip out halfway through carrying them.
            </p>
            <p>
              Using quality materials means less stress on moving day and fewer broken items when you unpack.
            </p>

            <h2>Delivery Available</h2>
            <p>
              Don't feel like hauling boxes around? We can drop off supplies at your place anywhere in the Treasure Valley.
            </p>
            <p>
              Order what you need, and we'll bring it to you. Easy.
            </p>

            <h2>Buy What You Use, Return the Rest</h2>
            <p>
              Ordered too many boxes? No problem. If they're still in good shape, we'll take back what you didn't use and refund you.
            </p>
            <p>
              We'd rather you have enough supplies than run short in the middle of packing.
            </p>

            <h2>Serving Boise and Beyond</h2>
            <p>
              We deliver packing supplies to Boise, Meridian, Eagle, Nampa, Caldwell, and surrounding areas. Whether you're moving across the street or across the state, we'll get you what you need.
            </p>
            <p>
              Call or text for pricing and availability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Order Packing Supplies Today</h2>
          <p className="text-xl text-gray-300 mb-8">Get quality boxes and materials delivered to your door</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
