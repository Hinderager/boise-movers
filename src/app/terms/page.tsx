import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Boise Movers Pros',
  description: 'Terms of service for Boise Movers Pros moving services in Boise and the Treasure Valley.',
  alternates: {
    canonical: 'https://boise-movers.com/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="pt-20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gunmetal mb-4">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: December 15, 2024</p>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Welcome to Boise Movers Pros. By accessing our website or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">1. Services</h2>
            <p>
              Boise Movers Pros provides professional moving services including local moves, long distance relocations, packing services, furniture moving, and loading/unloading assistance in Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding areas in Idaho. All services are subject to availability and our ability to safely perform the work.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">2. Service Agreement</h2>
            <p>
              By requesting services from Boise Movers Pros, you represent that you are the property owner or have authorization from the property owner to request and authorize moving services. You agree to provide accurate information about the property, inventory, and scope of work needed.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">3. Estimates and Pricing</h2>
            <ul>
              <li>We provide free estimates based on the information you provide about your move</li>
              <li>On-site estimates may be required for larger or complex moves</li>
              <li>Estimates are valid for 30 days unless otherwise specified</li>
              <li>Final pricing may vary if the actual scope of work differs significantly from the initial assessment</li>
              <li>We will communicate any pricing changes and obtain your approval before proceeding with additional work</li>
              <li>All prices are quoted in US dollars</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">4. Payment Terms</h2>
            <ul>
              <li>Payment is due upon completion of services unless otherwise agreed in writing</li>
              <li>For long distance moves, we may require a deposit or progress payments</li>
              <li>We accept cash, check, and major credit cards (Visa, Mastercard, American Express, Discover)</li>
              <li>Financing options may be available for qualified customers</li>
              <li>Returned checks are subject to a $35 fee</li>
              <li>Past due accounts may be subject to collection fees and interest</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">5. Scheduling and Cancellation</h2>
            <ul>
              <li>We will make reasonable efforts to accommodate your preferred moving date</li>
              <li>Please provide at least 48 hours notice if you need to reschedule or cancel your move</li>
              <li>Cancellations with less than 48 hours notice may be subject to a cancellation fee</li>
              <li>We reserve the right to reschedule due to weather, safety concerns, or other unforeseen circumstances</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">6. Property Access and Safety</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide safe access to both origin and destination properties for our team</li>
              <li>Inform us of any known hazards, stairs, elevators, or access restrictions</li>
              <li>Secure pets during the move</li>
              <li>Ensure clear pathways and parking for our moving truck</li>
              <li>Notify us of any items requiring special handling or disassembly</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">7. Liability and Insurance</h2>
            <ul>
              <li>Boise Movers Pros is fully licensed and insured</li>
              <li>Basic liability coverage is included with our services</li>
              <li>Additional valuation protection is available for purchase</li>
              <li>We are not liable for damage to items not properly packed unless packing services were purchased</li>
              <li>High-value items should be disclosed in advance</li>
              <li>Claims must be filed within 30 days of the move</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">8. Customer Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul>
              <li>Providing accurate inventory and access information</li>
              <li>Disconnecting and preparing appliances if applicable</li>
              <li>Obtaining necessary permits or building permissions</li>
              <li>Being present or having an authorized representative during the move</li>
              <li>Inspecting inventory and noting any concerns at delivery</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">9. Prohibited Items</h2>
            <p>
              We cannot transport hazardous materials, explosives, flammable liquids, perishable food, plants (for long distance moves), or items prohibited by law. You are responsible for transporting these items separately.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">10. Limitation of Liability</h2>
            <p>
              Our liability is limited as set forth in the service agreement and applicable law. We are not liable for consequential damages, delays caused by circumstances beyond our control, or pre-existing damage to items.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">11. Dispute Resolution</h2>
            <p>
              Any disputes will be governed by Idaho law. We encourage customers to contact us directly to resolve any concerns before pursuing legal action.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on our website with a new &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li><strong>Phone:</strong> (208) 768-3987</li>
              <li><strong>Email:</strong> info@topshelfpros.com</li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link href="/" className="text-dark-blue underline hover:text-[#0b7fb6]">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
