// Sidebar.js
import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faEdit,
  faColumns,
  faPalette,
  faUser,
  faLock,
  faSignOutAlt,
  faBars,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const urlApp = import.meta.env.VITE_APP_URL;

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen">
      <div
        className={`w-64 bg-[#061c33] fixed h-full flex flex-col ${
          isOpen ? "translate-x-0 transition-transform duration-300" : "-translate-x-[80%] transition-transform duration-300"
        }`}
      >
        <div className="flex items-center justify-start text-white text-2xl font-bold py-4">
          <img src={import.meta.env.VITE_APP_URL + "/ClimaPolar.png"} alt="" className="invert w-12 ml-2" />
          <div className="text-center text-white text-2xl font-bold py-2 mr-1 ml-1">
            Clima polar
          </div>
        </div>
        <hr className="h-px border-[#ffffff33] border-1" />
        <nav className="flex-1">
          <ul>
            <li className="flex items-center text-white p-4 hover:bg-[#4f6379] cursor-pointer">
              <Link className="text-sm" to={urlApp}>Ver sitio</Link>
            </li>
            <li className="flex items-center text-white p-4 hover:bg-[#4f6379] cursor-pointer">
              <FontAwesomeIcon icon={faColumns} className="mr-3" />
              <Link className="text-sm" to={urlApp + "/dashboard"}>Panel de control</Link>
            </li>
            <li className="flex hover:bg-[#4f6379] text-white cursor-pointer items-center p-4">
              <FontAwesomeIcon icon={faUser} className="mr-3" />
              <Link className="text-sm" to={urlApp + "/dashboard/users"}>Administrar usuarios</Link>
            </li>
            <li className="flex items-center text-white p-4 hover:bg-[#4f6379] cursor-pointer">
              <FontAwesomeIcon icon={faTable} className="mr-3" />
              <Link className="text-sm" to={urlApp + "/dashboard/products"}>
                Administrar productos
              </Link>
            </li>
          </ul>
        </nav>
        {/* Botón en la esquina inferior derecha */}
        <div className="absolute bottom-4 right-4 mr-1">
          <button onClick={toggleSidebar} className="cursor-pointer text-white">
            <FontAwesomeIcon 
              className={` text-2xl ${isOpen ? "rotate-0 transition-transform duration-300" : "rotate-180 transition-transform duration-300"}`}
              icon={faChevronLeft}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;