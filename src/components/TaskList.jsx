// `products` is server state, so useQuery owns it (and caches it).
// `favourites` is client state, so it stays in useState.

import { useQuery } from '@tanstack/react-query'
import ProductCard from './TaskRow.jsx'

const PUBLIC_API_URL = 'https://jsonplaceholder.typicode.com/todos'


// A plain async function: fetch, check, return the data. No state, no effect.
async function fetchTodos() {
  const response = await fetch(PUBLIC_API_URL)
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  const data = await response.json()
  return data;
}

function TodoList() {
  const { data: todos = [], isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 60_000,
    retry: false, // fail fast so the error state shows at once (default is 3 retries)
  })

  if (isLoading) return <p>Loading products...</p>
  if (isError) {
    return <p role="alert">Something went wrong loading products. Please try again.</p>
  }
  if (todos.length === 0) return <p>No products yet.</p>

  return (
    <section className="product-list">
      <div className="product-list__grid">
        {todos.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          // isFavourite={favourites.includes(product.id)}
          // onToggleFavourite={toggleFavourite}
          />
        ))}
      </div>
    </section>
  )
}

export default TodoList
