import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// main pages
import Home from "./pages/Home";
import Login from "./pages/Forms/Login";
import Register from "./pages/Forms/Register";
import Product from "./pages/Product";
import List from "./pages/Products/List";

// dashboard pages
import Index from './pages/Dashboard/pages/Index';
//import LeerUsuarios from "./pages/Dashboard/pages/Usuarios";
import AddUsers from "./pages/Dashboard/pages/Users/CreateUser";

// error pages
import NotFound from "./pages/Error/NotFound";
import ListUsers from "./pages/Dashboard/pages/Users/ListUsers";
import ListProducts from "./pages/Dashboard/pages/Products/ListProducts";
import EditProduct from "./pages/Dashboard/pages/Products/EditProduct";
import ListApartados from "./pages/Dashboard/pages/Apartados/ListApartados";
import CreateUser from "./pages/Dashboard/pages/Users/CreateUser";
import EditUser from "./pages/Dashboard/pages/Users/EditUser";
import CreateProduct from "./pages/Dashboard/pages/Products/CreateProduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/articles" element={<List />} />

        {/* User auth forms */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<Index />} />


        <Route path="/dashboard/users" element={<ListUsers />} />
        <Route path="/dashboard/users/createUser" element={<CreateUser />} />
        <Route path="/dashboard/users/editUser/:id" element={<EditUser />} />

        <Route path="/dashboard/products" element={<ListProducts />} />
        <Route path="/dashboard/products/createProduct" element={<CreateProduct />} />
        <Route path="/dashboard/products/editProduct/:id" element={<EditProduct />} />
        <Route path="/dashboard/products" element={<ListProducts />} />


        <Route path="/dashboard/apartados" element={<ListApartados />} />



        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
