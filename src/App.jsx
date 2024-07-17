import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Login from './pages/Forms/Login'
import Articles from './pages/Articles'
import Start from './pages/Start'
import Product from './pages/Product'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/product" element={<Product />} />
        <Route path="/start" element={<Start />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App