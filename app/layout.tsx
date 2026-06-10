import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CoveredRx — Per-Diem Pharmacy Shift Coverage in NYC',
  description: 'CoveredRx connects licensed per-diem pharmacists with independent pharmacies that need reliable shift coverage. Find per-diem pharmacist shifts and pharmacy shift coverage in New York.',
  generator: 'v0.app',
  keywords: ['per-diem pharmacist shifts', 'pharmacy shift coverage', 'licensed pharmacist shift marketplace', 'per-diem pharmacy work New York'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
  title: 'CoveredRx — Pharmacy Shift Coverage in NYC',
  description: 'Connecting licensed per-diem pharmacists with independent NYC pharmacies that need reliable shift coverage.',
  images: ['/og-image.png'],
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+"x3w8mios2";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window, document, "clarity", "script", "x3w8mios2");`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
