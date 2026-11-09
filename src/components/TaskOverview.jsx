import { useQuery } from '@tanstack/react-query'
import { fetchTasks } from './TaskList.jsx'

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
      <p className="text-3xl font-bold text-blue-600">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  )
}

function TaskOverview() {
  const { data: tasks = [], isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
    staleTime: 60_000,
    retry: false,
  })

  if (isLoading) return <p>Loading overview...</p>
  if (isError) return null

  const total = tasks.length
  const done = tasks.filter((task) => task.completed).length
  const open = total - done

  return (
    <div className="flex flex-col gap-2">
      <h2>Task Overview</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatCard label="Total" value={total} />
        <StatCard label="Done" value={done} />
        <StatCard label="Open" value={open} />
      </div>
    </div>
  )
}

export default TaskOverview
