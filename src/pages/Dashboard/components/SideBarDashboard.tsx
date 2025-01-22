import { useState, useEffect, useContext } from "react";
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
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '@/components/Auth/AuthContext' // Ajusta la ruta según tu estructura

const Sidebar = () => {
  const urlApp = import.meta.env.VITE_APP_URL;
  const navigate = useNavigate();
  const { userData } = useContext(AuthContext); // Usando el contexto de autenticación

  //console.log(userData[0]?.id_tipo_usuario);
  useEffect(() => {
    // Redirigir al cliente si su rol es 3
    if (userData[0]?.id_tipo_usuario === 3) {
      navigate(import.meta.env.VITE_APP_URL);
    }
  }, [userData]);

  // Función para determinar si un elemento debe mostrarse según el rol
  const shouldShowMenuItem = (allowedRoles: string | any[]) => {
    return allowedRoles.includes(userData[0]?.id_tipo_usuario);
  };

  // Si el usuario es técnico (rol 2), no mostrar nada
  if (userData[0]?.id_tipo_usuario === 2) {
    return null;
  }

  return (
    <div className="h-screen">
      <div
        className={`w-64 bg-[#061c33] fixed h-full flex flex-col`}
      >
        <div className="flex items-center justify-start text-white text-2xl font-bold py-4">
          <img
            src={import.meta.env.VITE_APP_URL + "/ClimaPolar.png"}
            alt=""
            className="invert w-12 ml-2"
          />
          <div className="text-center text-white text-2xl font-bold py-2 mr-1 ml-1">
            Clima polar
          </div>
        </div>
        <hr className="h-px border-[#ffffff33] border-1" />
        <nav className="flex-1">
          <ul>
            {shouldShowMenuItem([1, 4]) && (
              <li className="flex items-center text-white hover:bg-[#4f6379] cursor-pointer">
                <Link className="text-sm p-4 w-full" to={urlApp}>
                  Ver sitio
                </Link>
              </li>
            )}

            {shouldShowMenuItem([1]) && (
              <li className="flex items-center text-white  bg-[#4f6369] cursor-pointer">
                <span className="text-sm p-4 w-full">
                  <FontAwesomeIcon icon={faColumns} className="mr-3" />
                  Administrar apartados
                </span>
              </li>
            )}

            {shouldShowMenuItem([1, 4]) && (
              <li className="flex hover:bg-[#4f6379] text-white cursor-pointer items-center">
                <Link
                  className="text-sm p-4 w-full"
                  to={urlApp + "/dashboard/apartados"}
                >
                  <FontAwesomeIcon icon={faUser} className="mr-3" />
                  Apartados
                </Link>
              </li>
            )}

            {shouldShowMenuItem([1]) && (
              <li className="flex items-center text-white hover:bg-[#4f6379] cursor-pointer">
                <Link className="text-sm p-4 w-full" to={urlApp + "/dashboard"}>
                  <FontAwesomeIcon icon={faColumns} className="mr-3" />
                  Panel de control
                </Link>
              </li>
            )}
            
            {shouldShowMenuItem([1]) && (
              <li className="flex items-center text-white  bg-[#4f6369] cursor-pointer">
                <span className="text-sm p-4 w-full">
                  <FontAwesomeIcon icon={faColumns} className="mr-3" />
                  Administrar usuarios
                </span>
              </li>
            )}

            {shouldShowMenuItem([1]) && (
              <li className="flex hover:bg-[#4f6379] text-white cursor-pointer items-center">
                <Link
                  className="text-sm p-4 w-full"
                  to={urlApp + "/dashboard/clientes"}
                >
                  <FontAwesomeIcon icon={faUser} className="mr-3" />
                  Clientes
                </Link>
              </li>
            )}
            {shouldShowMenuItem([1]) && (
              <li className="flex hover:bg-[#4f6379] text-white cursor-pointer items-center">
                <Link
                  className="text-sm p-4 w-full"
                  to={urlApp + "/dashboard/users"}
                >
                  <FontAwesomeIcon icon={faUser} className="mr-3" />
                  Usuarios
                </Link>
              </li>
            )}

            {shouldShowMenuItem([1, 4]) && (
              <li className="flex items-center text-white hover:bg-[#4f6379] cursor-pointer">
                <Link
                  className="text-sm p-4 w-full"
                  to={urlApp + "/dashboard/products"}
                >
                  <FontAwesomeIcon icon={faTable} className="mr-3" />
                  Administrar productos
                </Link>
              </li>
            )}
            
            {shouldShowMenuItem([1, 4]) && (
              <li className="flex items-center text-white hover:bg-[#4f6379] cursor-pointer">
                <Link
                  className="text-sm p-4 w-full"
                  to={urlApp + "/dashboard/compras"}
                >
                  <FontAwesomeIcon icon={faBagShopping} className="mr-3" />
                  Compras
                </Link>
              </li>
            )}
          </ul>
        </nav>
        </div>
      </div>
  );
};

export default Sidebar;