import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jana RealestatePR | Luxury Properties in Puerto Rico',
  description: 'Discover premium real estate in Puerto Rico. Browse luxury homes, condos, villas, and investment properties with Jana RealestatePR.',
  keywords: 'Puerto Rico real estate, luxury homes PR, property listings Puerto Rico, buy house Puerto Rico',
  openGraph: {
    title: 'Jana RealestatePR | Luxury Properties in Puerto Rico',
    description: 'Discover premium real estate in Puerto Rico.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
