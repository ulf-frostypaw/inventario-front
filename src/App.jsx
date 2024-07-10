import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Login from './pages/Forms/Login'
import Components from './pages/Components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/button" element={<Components />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App