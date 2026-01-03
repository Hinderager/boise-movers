import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  { title: 'Local Moving Services', description: 'Moving across town in Boise? We make local moves simple and stress-free. Whether you\'re moving from a small apartment or a large house, our experienced crew handles your belongings with care. We know the Boise area inside and out, so we can navigate efficiently and get you settled into your new home quickly.', image: '/generated/local-moving.webp', link: '/local-moving', buttonText: 'Learn More' },
  { title: 'Long Distance Moving', description: 'Moving out of state or across the country? We\'ve got you covered. Our long distance moving services ensure your belongings arrive safely at your new destination. We coordinate every detail, provide accurate timelines, and keep you updated throughout the journey. Professional movers you can trust for the long haul.', image: '/generated/long-distance-moving.webp', link: '/long-distance-moving', buttonText: 'Learn More' },
  { title: 'Packing Services', description: 'Don\'t have time to pack or worried about doing it right? We offer professional packing services to save you time and protect your valuables. Our team uses quality materials and proven techniques to ensure everything arrives intact. From fragile items to bulky furniture, we pack it all efficiently and safely.', image: '/generated/packing-services.webp', link: '/packing-services', buttonText: 'Learn More' },
  { title: 'Commercial Moving', description: 'Relocating your business? We specialize in commercial moves with minimal disruption to your operations. We work around your schedule, move quickly and efficiently, and get your business up and running at the new location. Office furniture, equipment, inventory - we handle it all with professionalism.', image: '/generated/commercial-moving.webp', link: '/commercial-moving', buttonText: 'Learn More' },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>Serving Boise and the Treasure Valley</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">From Boise to Nampa, Meridian to Caldwell, we provide reliable moving services to homes and businesses throughout the Treasure Valley.</p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] lg:hidden w-full">{service.title}</h3>
              <div className={`relative w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image src={service.image} alt={service.title} fill loading={index === 0 ? "eager" : "lazy"} className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" quality={85} />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">{service.description}</p>
                <Link href={service.link} className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide">{service.buttonText}</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2087683987"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 768-3987</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
