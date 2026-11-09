import { Link } from 'react-router-dom'
import { categories } from './Categories.jsx'

function TaskRow({ id, title, userId, completed }) {
  const categoryName = categories.find((c) => c.userIds.includes(userId))?.name
  return (
    <article className="flex items-center justify-between gap-3 rounded-xl border border-violet-100 bg-white px-4 py-3 shadow-sm">
      <div className="min-w-0">
        <h3 className="truncate text-sm font-medium text-slate-800">{title}</h3>
        <p className="text-xs text-slate-500">{categoryName}</p>
      </div>
      {completed ? (
        <Link to={`/tasks/${id}`} className="shrink-0 rounded-md border border-green-300 bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
          Done
        </Link>
      ) : (
        <Link
          to={`/tasks/${id}`}
          className="shrink-0 rounded-md border border-red-300 bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700 hover:bg-red-100"
        >
          Open
        </Link>
      )}
    </article>
  )
}

export default TaskRow
