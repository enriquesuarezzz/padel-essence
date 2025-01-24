import { GeneralProps } from '@/interfaces/lang-props'
import { getDictionary } from '../../dictionaries'
import Image from 'next/image'
import { OnestText } from '@/components/atoms/onest_text'

export default async function ProductPage({
  params: { lang, category },
}: GeneralProps) {
  const dict = await getDictionary(lang)

  // Filter products by category
  const products = Object.values(dict.products.items).filter(
    (product: any) => product.category === category,
  )

  if (products.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center text-center">
        <OnestText
          text={dict.errors.product_not_found}
          fontSize="22px"
          style="bold"
          className="text-red-500"
        />
      </main>
    )
  }

  return (
    <main className="flex flex-wrap justify-center gap-8 p-8">
      {products.map((product: any, index: number) => (
        <div key={index} className="max-w-sm rounded-lg border p-4 text-center">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
          <OnestText
            text={product.name}
            fontSize="22px"
            style="bold"
            className="mt-4"
          />
          <OnestText
            text={`${dict.products.price}: ${product.price}€`}
            fontSize="16px"
          />
        </div>
      ))}
    </main>
  )
}
