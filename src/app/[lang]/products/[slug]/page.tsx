import { GeneralProps } from '@/interfaces/lang-props'
import { Metadata } from 'next'
import { getDictionary } from '../../dictionaries'
import Image from 'next/image'
import { OnestText } from '@/components/atoms/onest_text'
import Plus from '@/components/atoms/svg/plus'

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
      <div className="m-2 flex flex-col items-center justify-center gap-4 bg-black p-4 text-white md:flex-row lg:m-12 lg:gap-20 lg:p-12">
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="mr-0 md:mr-36"
          unoptimized
        />

        <div className="flex flex-col items-start justify-center">
          {/* Product Details */}
          <OnestText
            text={product.name}
            fontSize="32px"
            style="bold"
            className="text-bold text-orange pt-6 md:pt-0"
          />
          <OnestText
            text={`${dict.product.price_label}: $${product.price.toFixed(2)}`}
            fontSize="19px"
            className="text-bold mt-3 rounded-lg bg-blue-600 p-1 text-center"
          />
          <OnestText
            text={product.description}
            fontSize="19px"
            className="text-bold pb-6 pt-2 text-center md:pb-10 md:pt-6"
          />

          {/* Add to Cart Button */}
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 p-2 text-white">
            <Plus />
            {dict.products.add_to_cart}
          </button>
        </div>
      </div>
    </main>
  )
}
