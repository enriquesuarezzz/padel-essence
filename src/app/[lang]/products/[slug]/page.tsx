import { GeneralProps } from '@/interfaces/lang-props'
import { Metadata } from 'next'
import { getDictionary } from '../../dictionaries'
import Image from 'next/image'
import { OnestText } from '@/components/atoms/onest_text'

export async function generateMetadata({
  params: { lang, slug },
}: GeneralProps): Promise<Metadata> {
  // Load the dictionary for the selected language
  const dict = await getDictionary(lang)

  // Get product details from the dictionary
  const product = dict.products[slug]

  if (!product) {
    return {
      title: `Padel Essence | ${dict.metadata.product.not_found_title}`,
      description: dict.metadata.product.not_found_description,
    }
  }

  return {
    title: `Padel Essence | ${product.name}`,
    description: product.description,
  }
}

export default async function ProductPage({
  params: { lang, slug },
}: GeneralProps) {
  // Load the dictionary for the selected language
  const dict = await getDictionary(lang)

  // Get product details from the dictionary
  const product = dict.products[slug]

  if (!product) {
    return (
      <main className="flex flex-col items-center justify-center text-center">
        <OnestText
          text={dict.errors.product_not_found}
          fontSize="22px"
          style="bold"
          className="text-bold text-red-500"
        />
      </main>
    )
  }

  return (
    <main className="flex flex-col pb-10 pt-20 md:pt-40">
      {/* Product Image */}
      <Image
        src={`/images/products/${slug}.jpg`}
        alt={product.name}
        width={800}
        height={400}
        className="w-full object-cover"
        unoptimized
      />
      {/* Product Details */}
      <div className="flex flex-col items-center justify-center text-white">
        <div className="max-w-8xl mx-auto px-4 xl:px-10">
          <div className="flex flex-col items-center justify-center pt-2 md:pt-10">
            <OnestText
              text={product.name}
              fontSize="22px"
              style="bold"
              className="text-bold text-orange pt-6 md:pt-0"
            />
            <OnestText
              text={product.description}
              fontSize="19px"
              className="text-bold pb-6 pt-2 text-center md:pb-10 md:pt-6"
            />
            <OnestText
              text={`${dict.product.price_label}: $${product.price.toFixed(2)}`}
              fontSize="19px"
              className="text-bold text-center md:pb-10"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
