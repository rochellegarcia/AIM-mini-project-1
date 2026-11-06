import { Link } from 'react-router-dom'

function About() {
  return (
    <main className="mx-auto max-w-240 px-5 pt-8 pb-12">
      <h1>About</h1>
      <p>A small PH storefront, built across Weeks 4 and 5.</p>
      <Link to="/">Back to products</Link>
    </main>
  )
}

export default About
