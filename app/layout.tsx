import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ClientBodyScroll } from '@/components/client-body-scroll'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Waste Exchange - Turn Waste Into Value',
  description:
    'Waste Exchange connects waste sellers with verified recyclers and buyers across Nigeria. Sell your waste, browse the marketplace, and contribute to a circular economy.',
  
  icons: {
    icon: [
      {
        url: '/recycle-tree.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/recycle-tree.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2DC04A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <ClientBodyScroll />
      </body>
    </html>
  )
}
