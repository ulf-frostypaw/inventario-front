import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Login from './pages/Forms/Login'
import Articles from './pages/Articles'
import Start from './pages/Start'
import Product from './pages/Product'
<<<<<<< HEAD
import SideBar from './components/SideBar/SideBar'
=======
import SideBar from './components/SideBar'
<<<<<<< HEAD
>>>>>>> 2ddd93bdaf23a1795840e9b11f70aed26a65d381
>>>>>>> 6f96c778114896c4991e83ad56a71a48069d5cc1
=======
import NotFound from './pages/Error/NotFound'
>>>>>>> bca66f83310f93f148ddf1ca1644eb435756557a

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App