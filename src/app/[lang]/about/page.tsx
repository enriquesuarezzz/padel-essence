import { GeneralProps } from '@/interfaces/lang-props'
import { ResolvingMetadata, Metadata } from 'next'
import { getDictionary } from '../dictionaries'
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
    <main className="flex flex-col items-center justify-center px-10 pb-10 pt-20 text-white md:pt-40">
      <section className="max-w-[800px]">
        <div className="flex justify-center pb-6 pt-6">
          <OnestText
            text={dict.about.title}
            fontSize="22px"
            style="bold"
            className="text-bold"
          />
        </div>
        <div className="flex justify-center pt-6">
          <OnestText
            text={dict.about.description}
            fontSize="16px"
            className="text-bold"
          />
        </div>
        <div className="flex flex-col justify-center pt-6">
          <OnestText
            text={dict.about.description_2}
            fontSize="16px"
            className="text-bold"
          />
        </div>
        <div className="flex flex-col justify-center pt-6">
          <OnestText
            text={dict.about.why_us}
            fontSize="16px"
            className="text-bold"
          />
          <ul className="flex flex-col gap-2 pt-4 text-[14px] md:text-[16px]">
            <li className="text-bold"> {dict.about.list_1}</li>
            <li className="text-bold"> {dict.about.list_2}</li>
            <li className="text-bold"> {dict.about.list_3}</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center pt-6">
          <OnestText
            text={dict.about.ending}
            fontSize="16px"
            className="text-bold"
          />
        </div>
      </section>
    </main>
  )
}
