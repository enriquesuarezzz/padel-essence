import { Metadata } from 'next'

interface ProductPageProps {
  params: {
    lang: string
    slug: string
  }
}

// Dynamic metadata generation
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = params

  // Fetch product data for metadata
  const product = await fetch(`/products/${slug}`).then((res) => res.json())

  return {
    title: product.name,
    description: product.description,
  }
}

// Static paths generation
export async function generateStaticParams() {
  // Fetch all product slugs
  const products = await fetch('/products').then((res) => res.json())

  return products.map((product: { slug: string }) => ({
    slug: product.slug,
    lang: 'en', // Adjust for other languages if necessary
  }))
}

// Product page component
const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = params

  // Fetch product details for the specific slug
  const product = await fetch(`/products/${slug}`).then((res) => res.json())

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  )
}

export default ProductPage
