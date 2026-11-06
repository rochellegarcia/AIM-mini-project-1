import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import TodoDetail from './components/TodoDetail.jsx'
import About from './components/About.jsx'
import { useState } from 'react'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks/:id" element={<TodoDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
