import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

// A plain async function: fetch one product and return it (or null if there is none).
async function fetchProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  const data = await response.json().catch(() => null) // unknown id: empty answer
  if (!data) return null
  return {
    id: data.id,
    name: data.title,
    price: Math.round(data.price * 55),
    rating: data.rating?.rate ?? 4.5,
    image: data.image,
  }
}

function ProductDetail() {
  const { id } = useParams() // always a string: "3", never the number 3

  const { data: product, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['product', id], // one cache entry per product
    queryFn: () => fetchProduct(id),
    staleTime: 60_000,
    retry: false,
  })

  return (
    <main className="dashboard">
      <Link to="/">Back to products</Link>
      {isLoading && <p>Loading product...</p>}
      {isError && (
        <p role="alert">Something went wrong loading this product. Please try again.</p>
      )}
      {isSuccess && !product && <p>Product not found.</p>}
      {product && (
        <article className="product-card">
          <img className="product-card__image" src={product.image} alt={product.name} />
          <h1>{product.name}</h1>
          <p>PHP {product.price.toLocaleString()}</p>
          <p>Rating: {product.rating}</p>
        </article>
      )}
    </main>
  )
}

export default ProductDetail
