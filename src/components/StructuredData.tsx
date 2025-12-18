const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

const faqData = [
  { question: 'How much does it cost to hire movers in Boise?', answer: 'Most local moves in Boise cost between $300-800 depending on the size of your home and amount of belongings. We provide exact quotes upfront with no hidden fees.' },
  { question: 'Do I need to pack everything before movers arrive?', answer: 'No, we offer full packing services, partial packing, or you can pack yourself. We'll work with whatever fits your budget and preferences.' },
  { question: 'Are you insured?', answer: 'Yes, we are fully licensed and insured. Your belongings are protected during the entire moving process.' },
  { question: 'How far in advance should I book movers?', answer: 'For local moves, 1-2 weeks is usually sufficient. For summer moves or weekends, book earlier. Long-distance moves should be booked 2-3 weeks in advance.' },
  { question: 'Can you move just heavy furniture?', answer: 'Absolutely. We handle small moves including pianos, safes, large furniture, and other heavy items.' },
  { question: 'What areas do you serve?', answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities.' },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": `Boise Movers Pros - ${city}`,
    "description": `Professional moving services in ${city}, Idaho. Local moving, long distance moving, packing services, furniture moving. Licensed and insured.`,
    "url": "https://boise-movers.com",
    "telephone": "+1-208-505-9352",
    "email": "info@boise-movers.com",
    "address": { "@type": "PostalAddress", "addressLocality": city, "addressRegion": "ID", "addressCountry": "US" },
    "geo": { "@type": "GeoCoordinates", "latitude": coords.lat, "longitude": coords.lng },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": ["Local Moving", "Long Distance Moving", "Residential Moving", "Packing Services", "Loading Services", "Unloading Services", "Furniture Moving", "Senior Moving", "Piano Moving"],
    "priceRange": "$$",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "07:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "08:00", "closes": "17:00" }
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "150" }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Moving Services",
    "provider": { "@type": "MovingCompany", "name": "Boise Movers Pros" },
    "areaServed": { "@type": "State", "name": "Idaho" },
    "description": `Professional residential moving services in ${city} and the Treasure Valley. Local moves, long distance moves, packing services, and furniture moving.`
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
