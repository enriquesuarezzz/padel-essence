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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <nav className="fixed top-0 flex w-full items-center bg-transparent px-6 py-5 text-white">
      {/* Mobile: Burger Menu, Logo (centered), and Cart */}
      <div className="relative flex w-full items-center justify-between md:hidden">
        {/* Burger Menu */}
        <button className="z-10" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <span>✕</span> : <span>☰</span>}
        </button>

        {/* Logo (centered) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <Image
            src="/images/logo.avif"
            width={80}
            height={40}
            alt="Logo"
            className="flex-shrink-0"
          />
        </div>

        {/* Cart */}
        <button className="z-10 rounded-md border border-gray-600 p-2">
          <Cart />
        </button>
      </div>

      {/* Desktop: Navigation Links */}
      <div className="hidden items-center gap-6 md:flex md:flex-1">
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

      {/* Logo */}
      <div className="hidden flex-shrink-0 md:block">
        <Image
          src="/images/logo.avif"
          width={120}
          height={60}
          alt="Logo"
          className="mx-auto"
        />
      </div>

      {/* Right Section */}
      <div className="hidden items-center justify-end gap-6 md:flex md:flex-1">
        {/* Search */}
        <div className="hidden items-center gap-2 rounded-md border border-gray-800 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 md:flex">
          <input
            type="text"
            placeholder={dict.navbar.search_placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-white focus:outline-none"
          />
          <Search />
        </div>

        {/* Cart */}
        <button className="rounded-md border border-gray-600 p-2">
          <Cart />
        </button>

        {/* Language Toggle */}
        <div className="flex items-center gap-2">
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 bg-transparent p-4 md:hidden">
          <div className="flex flex-col items-center justify-center">
            {/* Links */}
            {data.map((item) => (
              <Link href={item.href} key={item.title}>
                <OnestText
                  text={item.title}
                  style="bold"
                  fontSize="16px"
                  className="block py-2 text-center text-white"
                />
              </Link>
            ))}

            {/* Search */}
            <div className="mt-4 flex w-96 items-center gap-2 rounded-md border border-gray-800 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <input
                type="text"
                placeholder={dict.navbar.search_placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white focus:outline-none"
              />
              <button onClick={handleSearch} aria-label="Search">
                <Search />
              </button>
            </div>

            {/* Language Toggle */}
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
        </div>
      )}
    </nav>
  )
}
