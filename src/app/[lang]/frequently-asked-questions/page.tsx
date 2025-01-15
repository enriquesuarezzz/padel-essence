import { GeneralProps } from '@/interfaces/lang-props'
import { ResolvingMetadata, Metadata } from 'next'
import { getDictionary } from '../dictionaries'
import { OnestText } from '@/components/atoms/onest_text'
import Accordion from '@/components/molecules/accordion/accordion'

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
  const data = [
    {
      title: dict.frequently_asked_questions.question_1.question,
      content: dict.frequently_asked_questions.question_1.answer,
    },
    {
      title: dict.frequently_asked_questions.question_2.question,
      content: dict.frequently_asked_questions.question_2.answer,
    },
    {
      title: dict.frequently_asked_questions.question_3.question,
      content: dict.frequently_asked_questions.question_3.answer,
    },
    {
      title: dict.frequently_asked_questions.question_4.question,
      content: dict.frequently_asked_questions.question_4.answer,
    },
    {
      title: dict.frequently_asked_questions.question_5.question,
      content: dict.frequently_asked_questions.question_5.answer,
    },
    {
      title: dict.frequently_asked_questions.question_6.question,
      content: dict.frequently_asked_questions.question_6.answer,
    },
  ]
  return (
    <main className="pt-20 md:pt-40">
      <div className="p-6">
        <Accordion items={data} />
      </div>
    </main>
  )
}
