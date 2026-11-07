import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { categories } from './Categories.jsx'


// Returns the task, or null when the API has no task with this id.
async function fetchTask(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  if (response.status === 404) return null
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  return response.json()
}

function TaskDetail() {
  const { id } = useParams()

  const { data: task, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['task', id],
    queryFn: () => fetchTask(id),
    staleTime: 60_000,
    retry: false,
  })

  return (
    <main className="mx-auto max-w-320 px-4 pt-8 pb-12 sm:px-5">
      <Link className="text-blue-600 underline hover:text-blue-800" to="/">Back to tasks</Link>
      {isLoading && <p className="mt-4">Loading task...</p>}
      {isError && (
        <p role="alert" className="mt-4">Something went wrong loading this task. Please try again.</p>
      )}
      {isSuccess && !task && <p className="mt-4">Task not found.</p>}
      {task && (
        <article className="mt-4 flex flex-col gap-2 rounded-xl border border-gray-300 bg-white p-4">
          <h1 className="text-2xl font-bold sm:text-3xl">{task.title}</h1>
          <p>Category: {categories.find((c) => c.userIds.includes(task.userId))?.name}</p>
          <p className={task.completed ? 'text-green-700' : 'text-red-600'}>
            Status: {task.completed ? 'Completed' : 'Not completed'}
          </p>
        </article>
      )}
    </main>
  )
}

export default TaskDetail
