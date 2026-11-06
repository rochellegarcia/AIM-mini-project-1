// `products` is server state, so useQuery owns it (and caches it).
// `favourites` is client state, so it stays in useState.

import { useQuery } from '@tanstack/react-query'
import TodoCard from './TaskRow.jsx'

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
    retry: false,
  })

  if (isLoading) return <p>Loading tasks...</p>
  if (isError) {
    return <p role="alert">Something went wrong loading tasks. Please try again.</p>
  }
  if (todos.length === 0) return <p>No tasks yet.</p>

  return (
    <section>
      <h3>Task Category</h3>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            {...todo}
          />
        ))}
      </div>
    </section>
  )
}

export default TodoList
