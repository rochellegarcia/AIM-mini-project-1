import { Link } from 'react-router-dom'

function TaskRow({ id, title, userId, completed }) {
  return (
    <article className="flex flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4 text-center">
      <h3 className="mt-1 text-base">{title}</h3>
      <p>User: {userId}</p>
      {completed ? (
        <p className="text-green-700">Done</p>
      ) : (
        <Link className="text-red-600 underline" to={`/tasks/${id}`}>Open</Link>
      )}
    </article>
  )
}

export default TaskRow
