import { Routes, Route } from 'react-router-dom'
import TaskPage from './components/TaskPage.jsx'
import TaskDetail from './components/TaskDetail.jsx'
import About from './components/About.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskPage />} />
      <Route path="/tasks/:id" element={<TaskDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
