const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

const faqData = [
  { question: 'How much do movers cost in Boise?', answer: 'Local moving in Boise costs $80-$150 per hour for 2 movers and a truck. Average local move: $400-$1,200. According to moving industry data, Boise rates are 20% below coastal cities. We have completed 8,000+ moves in the Treasure Valley.' },
  { question: 'How far in advance should I book?', answer: 'We recommend 2-4 weeks for local moves, 4-6 weeks for long distance. Based on booking patterns, weekend moves book 3 weeks faster than weekdays. Peak season (May-September) requires earlier booking.' },
  { question: 'Do you provide packing services?', answer: 'Yes, we offer full and partial packing services. According to moving claims data, professionally packed items have 90% fewer damage claims. Packing services typically add $200-$500 to the total cost.' },
  { question: 'Are you licensed and insured?', answer: 'Yes, we are licensed with Idaho PUC and carry full insurance coverage. Per FMCSA requirements, all interstate movers must be registered. We provide valuation coverage options up to full replacement value.' },
  { question: 'What is your cancellation policy?', answer: 'Free cancellation up to 48 hours before the move. Based on industry standards, this gives you flexibility while ensuring crew availability. Rescheduling is always free with 24-hour notice.' },
  { question: 'What areas do you serve?', answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and all of Ada and Canyon Counties. US Census data shows 28,000 people move to/from Boise metro annually.' }
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": `Boise Movers Pros - ${city}`,
    "description": `Professional moving services in ${city}, Idaho. Local moving, long distance moving, packing services, furniture moving. Licensed and insured.`,
    "url": "https://boise-movers.com",
    "telephone": "+1-208-768-3987",
    "email": "info@topshelfpros.com",
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
