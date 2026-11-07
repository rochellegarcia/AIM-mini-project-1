import { Link } from 'react-router-dom'
import TaskList from './TaskList.jsx'
import Profile from './Profile.jsx'
import { categories } from './Categories.jsx'
import { useState } from 'react';


function TaskPage() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')


  return (
    <main className="mx-auto max-w-320 px-4 pt-8 pb-12 sm:px-5">
      <header className="mb-6">
        <h1 className="mb-1 text-2xl font-bold sm:text-3xl">Personal Task Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] items-start gap-2">
        <section className=" self-start mt-4 gap-2 rounded-xl border border-gray-300 bg-white p-4">
          <nav className="grid grid-cols-1 gap-2 ">
            <Profile />
            <Link className="text-center hover:text-blue-800 rounded-xl border border-gray-300 bg-white p-4" to="/">Home</Link>
            <Link className="text-center hover:text-blue-800 rounded-xl border border-gray-300 bg-white p-4" to="/about">About</Link>
            <div className="flex items-center justify-center gap-2">
              <button className="flex w-full items-center justify-center text-center hover:text-blue-800 rounded-xl border border-gray-300 bg-white p-4" onClick={() => setIsOpen(!isOpen)}>Categories
                <svg className={`m-2 w-3 h-3 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg>
              </button>

            </div>
            {isOpen ? (
              <>
                <button
                  className={`text-center hover:text-blue-800 ${selectedCategory === null ? 'font-semibold text-blue-800' : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`text-center hover:text-blue-800 ${selectedCategory?.id === category.id ? 'font-semibold text-blue-800' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.name}
                  </button>
                ))}
              </>
            ) : null}

          </nav>
        </section>

        <section className=" self-start mt-4 flex flex-col gap-2 rounded-xl border border-gray-300 bg-white p-4">
          <h2>{search ? 'Search results' : selectedCategory ? selectedCategory.name : 'All tasks'}</h2>
          <input
            type="search"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 p-2"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <TaskList category={selectedCategory} search={search} />

          </div>
        </section>

      </div>



    </main>
  )
}

export default TaskPage
