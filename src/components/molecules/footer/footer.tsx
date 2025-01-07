import { OnestText } from '@/components/atoms/onest_text'
import { LangProps } from '@/interfaces/lang-props'
import Facebook from '@/components/atoms/svg/facebook'
import Instagram from '@/components/atoms/svg/instagram'
import Image from 'next/image'
import X from '@/components/atoms/svg/x'
import Link from 'next/link'
export default function Footer({ dict }: LangProps) {
  return (
    <footer className="bottom-0 flex w-full flex-col items-center justify-items-center bg-[#1e1e1e] py-4 md:mt-24 md:py-10">
      <Image src="/images/logo.avif" alt="logo" width={100} height={100} />
      <div className="flex flex-col items-center gap-8">
        <div className="flex gap-1 px-3 md:gap-6">
          <Link href={'/about'}>
            <OnestText
              text={dict.footer.about}
              fontSize="16px"
              className="text-white hover:text-blue-500"
            />
          </Link>
          <Link href={'/reservar'}>
            <OnestText
              text={dict.footer.shipping_and_return_policy}
              fontSize="16px"
              className="text-white hover:text-blue-500"
            />
          </Link>
          <Link href={'/reservar'}>
            <OnestText
              text={dict.footer.frequently_asked_questions}
              fontSize="16px"
              className="text-white hover:text-blue-500"
            />
          </Link>
          <Link href={'/contact'}>
            <OnestText
              text={dict.footer.contact}
              fontSize="16px"
              className="text-white hover:text-blue-500"
            />
          </Link>
        </div>
        <div className="flex gap-6">
          <Link
            href={'https://x.com/'}
            className="transition-transform hover:scale-110"
          >
            <X className="size-6 lg:size-8" />
          </Link>
          <Link
            href={'https://www.instagram.com/'}
            className="transition-transform hover:scale-110"
          >
            <Instagram className="size-6 lg:size-8" />
          </Link>
          <Link
            href={'https://www.facebook.com'}
            className="transition-transform hover:scale-110"
          >
            <Facebook className="size-6 lg:size-8" />
          </Link>
        </div>

        <OnestText
          text={dict.footer.copyright}
          fontSize="16px"
          className="text-center text-gray-600"
        />
      </div>
    </footer>
  )
}
