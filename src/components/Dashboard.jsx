import { Link } from 'react-router-dom'
import TaskList from './TaskList.jsx'

function Dashboard() {
  return (
    <main className="mx-auto max-w-240 px-5 pt-8 pb-12">
      <header className="mb-6">
        <h1 className="mb-1 text-3xl">Welcome to your To-do List Dashboard</h1>
        <nav>
          <Link to="/">To Do List</Link> | <Link to="/about">About</Link>
        </nav>
      </header>
      <TaskList />
    </main>
  )
}

export default Dashboard
