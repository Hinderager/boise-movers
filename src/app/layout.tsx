import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Montserrat, Oswald } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-movers.com'),
  title: {
    default: 'Boise Movers | Professional Moving Services in Boise Idaho',
    template: '%s | Boise Movers Pros',
  },
  description: 'Professional moving services in Boise, Meridian, Nampa, Caldwell & Eagle Idaho. Local moves, long distance moving, packing services, furniture moving. Licensed & insured. Call (208) 505-9352.',
  keywords: [
    'movers Boise',
    'moving company Boise Idaho',
    'local movers Meridian',
    'long distance movers Nampa',
    'residential movers near me',
    'packing services Caldwell',
    'furniture movers Eagle Idaho',
    'moving services Treasure Valley',
    'professional movers Idaho',
    'senior moving services Boise',
    'loading unloading help',
    'affordable movers Idaho',
  ],
  authors: [{ name: 'Boise Movers Pros' }],
  openGraph: {
    title: 'Professional Moving Services | Boise, Meridian, Nampa Idaho',
    description: 'Expert residential moving services in the Treasure Valley. Licensed, insured, and ready to make your move stress-free.',
    url: 'https://boise-movers.com',
    siteName: 'Boise Movers Pros',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://boise-movers.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${oswald.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-581QKP6ZE5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-581QKP6ZE5');
          `}
        </Script>
        <QuoteFormProvider>
          <Header />
          {children}
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
