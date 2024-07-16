import React from "react";
import Button from "../components/Button";
import Img from "../img/ClimaPolar.jpg";
import MenuIcon from "../components/icons/MenuIcon";

const TextLine = ({ children }) => {
  return (
    <>
      <li>
        <a className="hover:text-gray-600 hover:underline" href="#">
          {children}
        </a>
      </li>
    </>
  );
};

const Nbar = () => {
  return (
    <>
      <header className="bg-sky-300 h-screen">
        <div className="w-full shadow-md shadow-slate-500">
          <nav className="flex flex-wrap justify-between mx-auto p-4 bg-white">
            <div className="flex items-center mx-1">
              <MenuIcon/>
              <img src={Img} alt="Logo" className="w-28 rounded-md" />
              <p className="mx-4 text-3xl font-semibold">Clima Polar</p>
            </div>
            <div className="flex items-center my-auto w-full justify-center md:w-auto">
              <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-lg font-semibold">
                <TextLine children="Home" />
                <TextLine children="About" />
                <TextLine children="Services" />
              </ul>
            </div>
            <div className="flex items-center my-auto mx-4 w-full justify-center md:w-auto md:mx-16">
              <Button variant="primary">Iniciar sesión</Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nbar;
