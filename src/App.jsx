import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import About from './components/About.jsx'
import './App.css'
import { useState } from 'react'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
