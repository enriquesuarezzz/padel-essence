import { GeneralProps } from '@/interfaces/lang-props'
import { ResolvingMetadata, Metadata } from 'next'
import { getDictionary } from '../dictionaries'
import Image from 'next/image'
import { OnestText } from '@/components/atoms/onest_text'

export async function generateMetadata(
  { params: { lang } }: GeneralProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const dict = await getDictionary(lang)

  return {
    title: `Padel Essence | ${dict.metadata.about.title}`,
    description: `${dict.metadata.about.description}`,
  }
}

export default async function ContactPage({ params: { lang } }: GeneralProps) {
  const dict = await getDictionary(lang)
  return (
    <main className="mx-10 flex flex-col pb-10 pt-20 text-white md:pt-40">
      <div>
        <OnestText
          text={dict.about.title}
          fontSize="22px"
          style="bold"
          className="text-bold pt-6 md:pt-0"
        />
      </div>
      <div>
        <OnestText
          text={dict.about.description}
          fontSize="19px"
          className="text-bold pb-6 pt-2 text-center md:pb-10 md:pt-6"
        />
      </div>
    </main>
  )
}
