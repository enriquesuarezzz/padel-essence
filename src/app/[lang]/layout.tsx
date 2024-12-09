import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

import { LangOptions, getDictionary } from './dictionaries'
import Navbar from '@/components/molecules/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '<>Portfolio Enrique Suarez</>',
  description: 'Portfolio de Enrique Suarez',
}
interface Props {
  params: {
    lang: LangOptions
  }
  children: React.ReactNode
}

export default async function RootLayout({ children, params }: Props) {
  const dict = await getDictionary(params.lang)
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        {children}
        <Navbar dict={dict} />
      </body>
    </html>
  )
}
