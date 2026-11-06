import { Link } from 'react-router-dom'
import ProductList from './TaskList.jsx'

function Dashboard() {
  return (
    <main className="dashboard">
      <header className="dashboard__header">
        <h1>Sari-Sari Dashboard</h1>
        <p>A small PH storefront, rebuilt the React way.</p>
        <nav>
          <Link to="/">Products</Link> | <Link to="/about">About</Link>
        </nav>
      </header>
      <ProductList />
    </main>
  )
}

export default Dashboard
