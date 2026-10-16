
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'
import { site } from '@/data/site'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  authors: [{ name: site.name, url: site.linkedin }],
  keywords: [
    'Sufiyan Sameer Shaikh',
    'AI/ML',
    'Software Developer',
    'GPU Computing',
    'CUDA',
    'Presidency University',
    'Portfolio',
  ],

  // Google Search Console verification
  verification: {
    google: 'UNiynmYuzT45FV3MCd4orfmKh518NiOCbjAbe81zl5I',
  },

  ...(site.canonicalConfirmed ? { alternates: { canonical: '/' } } : {}),

  openGraph: {
    type: 'website',
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: 'en_IN',
  },

  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },

  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F4ED' },
    { media: '(prefers-color-scheme: dark)', color: '#252622' },
  ],
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  description: site.role,
  email: `mailto:${site.email}`,
  telephone: site.phoneHref.replace('tel:', ''),
  url: site.url,
  image: `${site.url}/profile/sufiyan.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Presidency University, Bengaluru',
  },
  sameAs: [site.linkedin, site.github],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

        <Providers>{children}</Providers>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
