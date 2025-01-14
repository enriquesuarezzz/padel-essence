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
    title: `Padel Essence | ${dict.metadata.frequently_asked_questions.title}`,
    description: `${dict.metadata.frequently_asked_questions.description}`,
  }
}

export default async function ContactPage({ params: { lang } }: GeneralProps) {
  const dict = await getDictionary(lang)
  return <main></main>
}
