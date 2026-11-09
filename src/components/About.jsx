import { Link } from 'react-router-dom'

function About() {
  return (
    <main className="mx-auto max-w-240 px-5 pt-8 pb-12">
      <section className="mb-6 flex items-center gap-2 text-lg">
        <h1 className="text-3xl font-bold">About</h1>
        <Link className="pl-2 text-blue-600 underline hover:text-blue-800" to="/">Back to tasks</Link>
      </section>

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
        <h2 className="mb-2 text-xl font-semibold">About the builder</h2>
        <p className="text-base leading-relaxed">Built by Rochelle Garcia as part of the AIM FullStack Development with AI program. This project was started in Week 4 and expanded in Week 5 as the app grew from a simple component demo into a multi-page app with routing.</p>
      </section>
    </main>
  )
}

export default About
