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
import ListUsers from "./pages/Dashboard/pages/Clientes/ListUsers";
import ListProducts from "./pages/Dashboard/pages/Products/ListProducts";
import EditProduct from "./pages/Dashboard/pages/Products/EditProduct";
import ListApartados from "./pages/Dashboard/pages/Apartados/ListApartados";
import CreateUser from "./pages/Dashboard/pages/Users/CreateUser";
import EditUser from "./pages/Dashboard/pages/Users/EditUser";
import CreateProduct from "./pages/Dashboard/pages/Products/CreateProduct";
import Servicios from "./pages/Servicios/Servicios";
import Vision from "./pages/Extra/Vision/Vision";
import Contacto from "./pages/Extra/Contacto/Contacto";
import Mision from "./pages/Extra/Mision/Mision";
import QuienesSomos from "./pages/Extra/QuienesSomos/QuienesSomos";
import ListClients from "./pages/Dashboard/pages/Users/ListClients";
import LeerCompras from "./pages/Comras/LeerCompras";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{/*listo*/}

        {/* NUEVAS SECCIONES DEL TRABAJO */}
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contacto" element={<Contacto />} />


        <Route path="/article/:id" element={<Product />} /> {/*listo*/}
        <Route path="/articles" element={<List />} /> {/*listo*/}
        <Route path="/request-service" element={<Servicios />} /> {/*listo*/}

        {/* User auth forms */}
        <Route path="/login" element={<Login />} /> {/*listo*/}
        <Route path="/register" element={<Register />} /> {/*listo*/}

        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<Index />} /> {/*listo*/}


        <Route path="/dashboard/users" element={<ListUsers />} /> {/*listo*/}
        <Route path="/dashboard/clientes" element={<ListClients />} /> {/*listo*/}
        <Route path="/dashboard/users/addUser" element={<CreateUser />} />
        {/*<Route path="/dashboard/users/editUser/:id" element={<AddUsers />} /> */}

        <Route path="/dashboard/products" element={<ListProducts />} /> {/*listo*/}
        <Route path="/dashboard/products/edit/:id" element={<EditProduct />} />
        <Route path="/dashboard/users/createUser" element={<CreateUser />} />
        <Route path="/dashboard/users/editUser/:id" element={<EditUser />} />

        <Route path="/dashboard/compras" element={<LeerCompras />} />


        <Route path="/dashboard/products" element={<ListProducts />} />
        <Route path="/dashboard/products/createProduct" element={<CreateProduct />} />
        <Route path="/dashboard/products/editProduct/:id" element={<EditProduct />} />
        <Route path="/dashboard/products" element={<ListProducts />} />


        <Route path="/dashboard/apartados" element={<ListApartados />} />{/*listo*/}
        {/* <Route path="/dashboard/listApartados" element={<ListApartados />} /> */}



        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
