import React from "react";
import Button from "../components/Button";
import Img from "../img/ClimaPolar.jpg";
import { Link, redirect } from "react-router-dom";

/* 
  * SOLUCIONAR PROBLEMAS DE ACCESIBILIDAD Y USABILIDAD. POR E.J:
  * CORREGIR PROBLEMAS DE ESPACIOS Y USOS INNECESARIOS DE TEXTOS
*/

const TextLine = ({ children = [], redirectTo}) => {
  return (
    <>
      <li>
        <Link className="hover:text-gray-600 hover:underline" to={import.meta.env.VITE_APP_URL + redirectTo}>
          {children}
        </Link>
      </li>
    </>
  );
};

const Nbar = () => {
  return (
    <>
      <header>
        <div className="w-full shadow sticky top-0 shadow-slate-500">
          <nav className="flex flex-wrap justify-between mx-auto p-4 bg-white container">
            <div className="flex items-center mx-4">
              <img src={Img} alt="Logo" className="w-28 rounded-md" />
              <Link className="mx-4 text-2xl font-semibold">Clima polar</Link>
            </div>
            <div className="flex items-center my-auto w-full justify-center md:w-auto">
              <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-lg font-semibold">
                <TextLine redirectTo={"/productos"}>Productos</TextLine>
                <TextLine redirectTo={"/servicios"}>Servicios</TextLine>
              </ul>
            </div>
            <div className="flex items-center my-auto mx-4 w-full justify-center md:w-auto md:mx-16">
              <Button variant="primary">
                <Link to={"/login"} >Iniciar sesi&oacute;n</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nbar;
