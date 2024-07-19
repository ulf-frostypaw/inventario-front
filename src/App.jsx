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

function App() 
{
  const [email, setEmail] = "Keso";
  return (
    <AuthContext.Provider value={[email, setEmail]}>
      <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/start" element={<Start />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
