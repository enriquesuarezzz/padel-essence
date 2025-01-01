import { Metadata, ResolvingMetadata } from 'next'
import { GeneralProps } from '@/interfaces/lang-props'
import { getDictionary } from './dictionaries'
import Item from '@/components/molecules/item/item'
import ItemsSwiper from '@/components/molecules/items_swiper/items_swiper'

export async function generateMetadata(
  { params: { lang } }: GeneralProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const dict = await getDictionary(lang)

  return {
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
  }
}

export default async function Home({ params: { lang } }: GeneralProps) {
  const dict = await getDictionary(lang || 'en')

  return (
    <main className="pt-28 md:pt-40">
      <Item dict={dict} />
      <ItemsSwiper dict={dict} />
    </main>
  )
}
