import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

// A plain async function: fetch one product and return it (or null if there is none).
async function fetchTodo(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  const data = await response.json().catch(() => null) // unknown id: empty answer
  if (!data) return null
  return {
    id: data.id,
    name: data.title,
  }
}

function TodoDetail() {
  const { id } = useParams() // always a string: "3", never the number 3

  const { data: todo, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['todo', id], // one cache entry per product
    queryFn: () => fetchTodo(id),
    staleTime: 60_000,
    retry: false,
  })

  return (
    <main className="mx-auto max-w-240 px-5 pt-8 pb-12">
      <Link to="/">Back to to do list</Link>
      {isLoading && <p>Loading todo list...</p>}
      {isError && (
        <p role="alert">Something went wrong loading this to do task. Please try again.</p>
      )}
      {isSuccess && !todo && <p>todo task not found.</p>}
      {todo && (
        <article className="flex flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4">
          <h1>{todo.title}</h1>
          <p>Description: this task is for test</p>
        </article>
      )}
    </main>
  )
}

export default TodoDetail
