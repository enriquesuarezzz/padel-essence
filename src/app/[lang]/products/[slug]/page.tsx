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
  const product = dict.products.items[slug]

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
  const product = dict.products.items[slug]

  if (!product) {
    return (
      <main className="flex flex-col items-center justify-center pb-36 pt-12 text-center md:pb-0 md:pt-28">
        <OnestText
          text={dict.errors.product_not_found}
          fontSize="22px"
          style="bold"
          className="text-bold pt-20 text-red-500 md:pt-10"
        />
        <Image
          src="/images/not_found.avif"
          alt="404"
          width={550}
          height={550}
        />
      </main>
    )
  }

  return (
    <main className="flex flex-col pb-6 pt-20 md:pt-28">
      <div className="m-2 flex flex-col items-center justify-center gap-4 rounded-lg border border-gray-700 bg-black/70 p-4 text-white md:flex-row lg:mx-32 lg:gap-20 lg:p-44">
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="mr-0 md:mr-36"
          unoptimized
        />

        <div className="flex flex-col items-start justify-center gap-3">
          {/* Product Details */}
          <OnestText
            text={product.name}
            fontSize="32px"
            style="bold"
            className="text-bold text-orange pt-6 md:pt-0"
          />
          <OnestText
            text={`${dict.products.price}: ${product.price.toFixed(2) + '€'}`}
            fontSize="19px"
            className="text-bold mt-3 rounded-lg bg-blue-600 p-1 text-center"
          />
          <OnestText
            text={product.description}
            fontSize="19px"
            className="text-bold pb-2 pt-2 text-center"
          />

          {/* Size Selector */}
          {product.sizes && (
            <div className="w-full pb-2">
              <label
                htmlFor="size-selector"
                className="block text-sm font-bold text-gray-300"
              >
                <OnestText
                  text={dict.products.select_size}
                  fontSize="16px"
                  className="text-bold"
                />
              </label>
              <select
                id="size-selector"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-800 p-2 text-white"
              >
                {product.sizes.map((size: string) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Add to Cart Button */}
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700">
            <Plus />
            {dict.products.add_to_cart}
          </button>
        </div>
      </div>
    </main>
  )
}
