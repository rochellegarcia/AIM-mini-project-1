import { Link } from 'react-router-dom'

function ProductCard({ id, title, userId, completed }) {
  return (
    <article className="flex flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4 text-center">
      <h3 className="mt-1 text-base ">
        {title}
      </h3>
      <p>Category: {userId}</p>

      <button className="text-green-700">{completed ? 'Done' : <Link className="text-red-600" to={`/tasks/${id}`}>Open</Link>}</button>

      {/* <button
        type="button"
        className={`mt-2 cursor-pointer rounded-md border p-2 text-sm ${isFavourite ? 'border-amber-500 bg-amber-50 text-amber-800' : 'border-gray-300 bg-white'}`}
        onClick={() => onToggleFavourite(id)}
        aria-pressed={isFavourite}
      >
        {isFavourite ? '★ Favourited' : '☆ Add to Favourites'}
      </button> */}
    </article>
  )
}

export default ProductCard
