import { useQuery } from '@tanstack/react-query'
import TaskRow from './TaskRow.jsx'

const PUBLIC_API_URL = 'https://jsonplaceholder.typicode.com/todos'

async function fetchTasks() {
  const response = await fetch(PUBLIC_API_URL)
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  return response.json()
}

function TaskList({ category, search }) {
  const { data: tasks = [], isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
    staleTime: 60_000,
    retry: false,
  })

  if (isLoading) return <p>Loading tasks...</p>
  if (isError) {
    return <p role="alert">Something went wrong loading tasks. Please try again.</p>
  }

  const visibleTasks = category
    ? tasks.filter((task) => category.userIds.includes(task.userId))
    : tasks

  const searchedTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  )

  const shownTasks = search ? searchedTasks : visibleTasks

  const sortedTasks = category
    ? shownTasks.toSorted((a, b) => a.completed - b.completed)
    : shownTasks

  if (shownTasks.length === 0) return <p>No tasks found.</p>

  return (
    <>
      {sortedTasks.map((task) => (
        <TaskRow key={task.id} {...task} />
      ))}
    </>
  )
}

export default TaskList
