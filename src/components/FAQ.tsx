'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const faqs = [
  { question: 'How much does it cost to hire movers in Boise?', answer: 'Most local moves run between $300-800 depending on the size of your home and how much stuff you have. We charge by the hour with a minimum, and we will give you an accurate estimate over the phone or in person. No hidden fees - what we quote is what you pay.' },
  { question: 'Do I need to pack everything before the movers arrive?', answer: 'That is up to you. We can pack everything for you, pack just the fragile stuff, or you can pack it all yourself and we will just do the moving. Whatever works best for your situation and budget.' },
  { question: 'Are you insured?', answer: 'Yes. We are fully licensed and insured. We take care with everything we move, but if something does get damaged, you are covered. We will walk you through the insurance details when we give you a quote.' },
  { question: 'How far in advance should I book movers?', answer: 'For local moves, a week or two is usually fine. If you are moving during summer (our busy season) or on a weekend, book as early as you can. For long-distance moves, give us at least 2-3 weeks notice if possible.' },
  { question: 'Can you move just one or two heavy items?', answer: 'Absolutely. We do small moves all the time - pianos, safes, big furniture, hot tubs. If it is heavy or awkward and you do not want to deal with it yourself, we will handle it.' },
  { question: 'Do you move long distance?', answer: 'Yes. We handle moves anywhere in Idaho and to neighboring states. For longer cross-country moves, we work with trusted partners to make sure your stuff gets there safely.' },
  { question: 'What if I need to reschedule?', answer: 'Life happens. Just give us a call as soon as you know. We will do our best to work with you and find a new date that fits your schedule.' },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) => setActiveIndex(activeIndex === index ? null : index)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50">
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">{faq.question}</span>
                <ChevronDown className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden"><div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">{faq.answer}</div></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 505-9352</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
