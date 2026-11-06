import { Link } from 'react-router-dom'

function ProductCard({ id, title, completed }) {
  return (
    <article className="product-card">
      <h3 className="product-card__name">
        <Link to={`/tasks/${id}`}>{title}</Link>
      </h3>
      <p className="product-card__rating">{completed}</p>
      <button>{completed ? '★ Open' : '☆ Done'}</button>

      {/* <button
        type="button"
        className={`product-card__favourite${isFavourite ? ' is-active' : ''}`}
        onClick={() => onToggleFavourite(id)}
        aria-pressed={isFavourite}
      >
        {isFavourite ? '★ Favourited' : '☆ Add to Favourites'}
      </button> */}
    </article>
  )
}

export default ProductCard
