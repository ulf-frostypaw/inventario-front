import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Forms/Login";
import Register from "./pages/Forms/Register";
import Articles from "./pages/Articles";
// import Start from "./pages/Start";
import Product from "./pages/Product";
import SideBar from "./components/SideBar/SideBar";
import NotFound from "./pages/Error/NotFound";
import Dashboard from "./pages/Dashboard";
import List from "./pages/Products/List";
import LeerUsuarios from "./pages/Usuarios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/articles" element={<List />} />

        {/* User auth forms */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/users" element={<LeerUsuarios />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
