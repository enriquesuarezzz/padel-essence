'use client'
import { OnestText } from '@/components/atoms/onest_text'
import English from '@/components/atoms/svg/english'
import Spanish from '@/components/atoms/svg/spanish'
import Image from 'next/image'
import { LangProps } from '@/interfaces/lang-props'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar({ dict }: LangProps) {
  const router = useRouter()
  const pathname = usePathname()

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
    // Remove the leading '/' and split the path
    const segments = pathname.slice(1).split('/')

    // Check if the first segment is a language code (assuming 'en' or 'es')
    if (segments[0] === 'en' || segments[0] === 'es') {
      // Remove the existing language segment
      segments.shift()
    }

    // Add the new language segment
    const newPath = `/${lang}/${segments.join('/')}`

    // Navigate to the new path
    router.push(newPath)
  }

  return (
    <nav className="fixed top-0 mx-auto flex w-full items-center gap-3 pt-5 md:gap-5">
      <Image
        src="/images/logo.avif"
        width={120}
        height={60}
        alt="Logo"
        className=""
      />
      {/* Navbar links */}
      {data.map((item) => (
        <Link href={item.href} key={item.title}>
          <OnestText
            text={item.title}
            style="bold"
            fontSize="19px"
            className="hover:text-orange text-white"
          />
        </Link>
      ))}
      {/* Language selection */}
      <div className="flex gap-2 md:ml-5 md:gap-3">
        <button
          onClick={() => changeLanguage('en')}
          aria-label="Spanish"
          className={`hover:text-orange text-white ${currentLang === 'es' ? 'opacity-50' : ''}`}
        >
          <English className="size-4 md:size-6" />
        </button>
        <button
          onClick={() => changeLanguage('es')}
          aria-label="English"
          className={`hover:text-orange text-white ${currentLang === 'en' ? 'opacity-50' : ''}`}
        >
          <Spanish className="size-4 md:size-6" />
        </button>
      </div>
    </nav>
  )
}
