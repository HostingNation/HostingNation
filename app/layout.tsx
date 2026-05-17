import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavigationProgress from '@/components/NavigationProgress';
import SiteLoader from '@/components/SiteLoader';
import { siteConfig } from '@/lib/site';
import { organizationSchema, personSchema, websiteSchema } from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space',
  preload: true
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  preload: false
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Hosting Nation | Custom Web Development, SaaS & Software Company by Mohd Suhail',
    template: '%s | Hosting Nation'
  },
  description:
    'Hosting Nation is a software development company founded by Mohd Suhail. We build custom web applications, SaaS platforms, e-commerce stores, API integrations, and business automation for startups and businesses worldwide.',
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.founder.name, url: `${siteConfig.url}/founder` }],
  creator: siteConfig.founder.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  generator: 'Next.js',
  category: 'Technology',
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: 'Hosting Nation | Custom Web Development, SaaS & Software Company by Mohd Suhail',
    description: 'Founded by Mohd Suhail, Hosting Nation builds custom web apps, SaaS platforms, and business automation for startups and businesses globally.',
    siteName: siteConfig.name,
    images: [{ url: '/images/og-cover.png', width: 1200, height: 630, alt: 'Hosting Nation' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hosting Nation | Custom Web Development & SaaS by Mohd Suhail',
    description: 'Modern custom software, web apps & SaaS built by Mohd Suhail, Founder of Hosting Nation.',
    images: ['/images/og-cover.png'],
    creator: '@hostingnation'
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }
  },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  verification: { google: 'your-google-site-verification-token' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="font-sans antialiased overflow-x-hidden" style={{ background: '#ffffff', color: '#000000' }}>

        {/* ── First-paint loader (pure HTML, no hydration flicker) ── */}
        <div id="site-loader" aria-hidden="true">
          <div style={{
            width: 48, height: 48, borderRadius: 14,
            background: '#dc3545',
            display: 'grid', placeItems: 'center',
            animation: 'loader-pulse 1.2s ease-in-out infinite'
          }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>HN</span>
          </div>
          <div style={{ width: 100, height: 2, background: '#ebebeb', borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: '#dc3545',
              animation: 'loader-sweep 1s ease-in-out infinite'
            }} />
          </div>
        </div>

        {/* ── Route-change: top progress bar + overlay ── */}
        <NavigationProgress />

        {/* ── Client: removes loader after paint ── */}
        <SiteLoader />

        <Navbar />
        <main className="relative page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
