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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{/*listo*/}
        <Route path="/product/:id" element={<Product />} /> {/*listo*/}
        <Route path="/articles" element={<List />} /> {/*listo*/}

        {/* User auth forms */}
        <Route path="/login" element={<Login />} /> {/*listo*/}
        <Route path="/register" element={<Register />} /> {/*listo*/}

        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<Index />} /> {/*listo*/}


        <Route path="/dashboard/users" element={<ListUsers />} /> {/*listo*/}
        <Route path="/dashboard/users/addUser" element={<CreateUser />} />
        <Route path="/dashboard/users/editUser/:id" element={<AddUsers />} />

        <Route path="/dashboard/products" element={<ListProducts />} /> {/*listo*/}
        <Route path="/dashboard/products/edit/:id" element={<EditProduct />} />
        <Route path="/dashboard/products" element={<ListProducts />} />


        <Route path="/dashboard/apartados" element={<ListApartados />} />{/*listo*/}



        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
