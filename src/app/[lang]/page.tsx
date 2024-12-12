import { Metadata, ResolvingMetadata } from 'next'
import { GeneralProps } from '@/interfaces/lang-props'
import { getDictionary } from './dictionaries'
import Item from '@/components/molecules/item/item'

export async function generateMetadata(
  { params: { lang } }: GeneralProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const dict = await getDictionary(lang)

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  }
}

export default async function Home({ params: { lang } }: GeneralProps) {
  const dict = await getDictionary(lang || 'en')

  return (
    <main className="pt-40">
      <Item dict={dict} />
    </main>
  )
}
