import { Link } from 'react-router-dom'
import Profile from './Profile.jsx'

function About() {
  return (
    <main className="mx-auto max-w-320 px-5 pt-8 pb-12">
      <header className="mb-6">
        <h1 className="mb-1 text-2xl font-bold sm:text-3xl">Personal Task Dashboard</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] items-start gap-2">
        <section className="self-start mt-4 gap-2 rounded-xl border border-gray-300 bg-white p-4">
          <nav className="grid grid-cols-1 gap-2">
            <Profile />
            <Link className="text-center hover:text-blue-800 rounded-xl border border-gray-300 bg-white p-4" to="/">Home</Link>
            <Link className="text-center hover:text-blue-800 rounded-xl border border-gray-300 bg-white p-4" to="/about">About</Link>
          </nav>
        </section>

        <div className="self-start mt-4 gap-2  px-6 rounded-xl border border-gray-300 bg-white p-4">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mb-6 text-base leading-relaxed">This is a To-do List Dashboard built as a React web app. It helps you keep track of the tasks you need to get done, sort them into categories, find a task quickly, and open any task to view its details.</p>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">What this app does</h2>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li>Shows all your tasks on one dashboard, with each task's title, category, and status</li>
              <li>Shows a task overview with the total, done, and open task counts</li>
              <li>Filters tasks by category (Work, Personal, or House Chores), with open tasks listed first</li>
              <li>Searches tasks by title within the selected category, or across all tasks when All is selected</li>
              <li>Lets you open a task on its own detail page</li>
              <li>Uses routing so each page has its own web address</li>
              <li>Has an About page (this one) that explains the project</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">How it is built</h2>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li><strong>React</strong> for the user interface, split into small reusable components</li>
              <li><strong>React Router</strong> for moving between the Dashboard, task details, and About pages</li>
              <li><strong>TanStack Query</strong> for fetching tasks from the API and caching them</li>
              <li><strong>Tailwind CSS</strong> for styling and the responsive layout</li>
              <li><strong>Vite</strong> as the development tool and build setup</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">About the profile</h2>
            <p className="mb-2 text-base leading-relaxed">The profile box on the left is a sample. Its name and photo come from a small <code>user</code> object in <code>src/components/Profile.jsx</code>, which here is Hedy Lamarr, the actress and inventor.</p>
            <p className="text-base leading-relaxed">The photo is not stored in the project. The <code>imageUrl</code> points to an image on the web (react.dev), and the browser loads it when the page opens. This shows how an image from an online source can be displayed in a React app. To use a different picture or name, change <code>imageUrl</code> and <code>name</code> in that file.</p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">About the builder</h2>
            <p className="text-base leading-relaxed">Built by Rochelle Garcia as part of the AIM FullStack Development with AI program. This project was started in Week 4 and expanded in Week 5 as the app grew from a simple component demo into a multi-page app with routing.</p>
          </section>
        </div>
      </div>
    </main >
  )
}

export default About
