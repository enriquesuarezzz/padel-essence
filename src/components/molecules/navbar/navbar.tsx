'use client'

import { OnestText } from '@/components/atoms/onest_text'
import English from '@/components/atoms/svg/english'
import Spanish from '@/components/atoms/svg/spanish'
import Image from 'next/image'
import { LangProps } from '@/interfaces/lang-props'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import Cart from '@/components/atoms/svg/cart'
import Search from '@/components/atoms/svg/search'

export default function Navbar({ dict }: LangProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State for burger menu

  const data = [
    {
      title: dict.navbar.rackets,
      href: '/rackets',
    },
    {
      title: dict.navbar.shoes,
      href: '/shoes',
    },
    {
      title: dict.navbar.material_and_accessories,
      href: '/material_and_accessories',
    },
  ]

  const currentLang = pathname.startsWith('/es') ? 'es' : 'en'

  const changeLanguage = (lang: string) => {
    const segments = pathname.slice(1).split('/')
    if (segments[0] === 'en' || segments[0] === 'es') {
      segments.shift()
    }
    const newPath = `/${lang}/${segments.join('/')}`
    router.push(newPath)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const searchPath = `/search?query=${encodeURIComponent(searchQuery)}`
      router.push(searchPath)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 mx-auto flex w-full items-center justify-between gap-3 px-4 py-5 text-white md:gap-5">
      <div className="flex items-center gap-4">
        <Image src="/images/logo.avif" width={120} height={60} alt="Logo" />
        {/* Navbar links */}
        <div className="hidden items-center gap-4 md:flex">
          {data.map((item) => (
            <Link href={item.href} key={item.title}>
              <OnestText
                text={item.title}
                style="bold"
                fontSize="19px"
                className="hover:text-blue-500"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="hidden items-center gap-2 rounded-md border border-gray-800 focus-within:ring-2 focus-within:ring-blue-500 md:flex">
          <input
            type="text"
            placeholder={dict.navbar.search_placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent px-3 py-2 text-white focus:outline-none"
          />
          <Search />
        </div>

        {/* Language selection */}
        <div className="hidden gap-2 md:flex">
          <button
            onClick={() => changeLanguage('en')}
            aria-label="English"
            className={`hover:text-orange ${currentLang === 'es' ? 'opacity-50' : ''}`}
          >
            <English className="size-5" />
          </button>
          <button
            onClick={() => changeLanguage('es')}
            aria-label="Spanish"
            className={`hover:text-orange ${currentLang === 'en' ? 'opacity-50' : ''}`}
          >
            <Spanish className="size-5" />
          </button>
          <button className="rounded-md border border-gray-600 p-2">
            <Cart />
          </button>
        </div>

        {/* Burger Menu */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <span>✕</span> : <span>☰</span>}{' '}
          {/* Replace with your SVG icons */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 bg-gray-800 p-4 md:hidden">
          {data.map((item) => (
            <Link href={item.href} key={item.title}>
              <OnestText
                text={item.title}
                style="bold"
                fontSize="19px"
                className="block py-2 text-center text-white hover:bg-gray-700"
              />
            </Link>
          ))}
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={() => changeLanguage('en')}
              className={`hover:text-orange ${currentLang === 'es' ? 'opacity-50' : ''}`}
            >
              <English className="size-5" />
            </button>
            <button
              onClick={() => changeLanguage('es')}
              className={`hover:text-orange ${currentLang === 'en' ? 'opacity-50' : ''}`}
            >
              <Spanish className="size-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
