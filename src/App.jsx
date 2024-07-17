import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Login from './pages/Forms/Login'
<<<<<<< HEAD
import Components from './pages/Components'
import NotFound from './pages/Error/NotFound'
=======
import Articles from './pages/Articles'
import Start from './pages/Start'
import Product from './pages/Product'
import SideBar from './components/SideBar'
>>>>>>> 2ddd93bdaf23a1795840e9b11f70aed26a65d381

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
=======
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/product" element={<Product />} />
        <Route path="/start" element={<Start />} />
        <Route path="/articles" element={<Articles />} />
>>>>>>> 2ddd93bdaf23a1795840e9b11f70aed26a65d381
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<Components />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App