import { Link } from 'react-router-dom'
import { categories } from './Categories.jsx'

function TaskRow({ id, title, userId, completed }) {

  const categoryName = categories.find((c) => c.userIds.includes(userId))?.name
  return (
    <article className="flex flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4 text-center">
      <h3 className="mt-1 text-base">Title: {title}</h3>
      <p>Category: {categoryName}</p>
      <p>
        Status:{' '}
        {completed ? (
          <span className="text-green-700">Done</span>
        ) : (
          <>
            <span className="text-red-700">Not Completed </span>
            <Link className="text-gray-600 underline" to={`/tasks/${id}`}>Open Task</Link>
          </>
        )}
      </p>

    </article>
  )
}

export default TaskRow
