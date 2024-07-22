import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Forms/Login";
import Articles from "./pages/Articles";
import Start from "./pages/Start";
import Product from "./pages/Product";
import SideBar from "./components/SideBar/SideBar";
import NotFound from "./pages/Error/NotFound";
import { AuthContext } from "./components/Auth/AuthContext";
import Sidebar from "./pages/Dashboard";

function App() 
{
  const [email, setEmail] = "Keso";
  return (
    <BrowserRouter>
    <AuthContext.Provider value={{ email, setEmail }}>
      <Routes>
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/register" element={<Start />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Sidebar />} />
      </Routes>
    </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;
