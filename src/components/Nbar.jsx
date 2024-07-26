import React, { useContext } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Search from "./icons/Search";
import { AuthContext } from "./Auth/AuthContext";

const TextLine = ({ children = [], redirectTo }) => {
  return (
    <Link
      className="hover:text-gray-600 hover:underline py-2 px-3 font-medium items-center inline-flex"
      to={import.meta.env.VITE_APP_URL + redirectTo}
    >
      {children}
    </Link>
  );
};

const Nbar = () => {
  const { userData, logout } = useContext(AuthContext);
  /* if (!userData) {
    console.error("AuthContext is undefined");
    return null;
  } */
  // console.log(JSON.stringify(userData[0].id_tipo_usuario));
  return (
    <>
      <header className="bg-zinc-100 sticky top-0 z-10 shadow">
        <div className="mx-auto container px-2 sm:px-4 lg:divide-y lg:divide-teal-700 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="relative z-10 flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center">
                <Link to={import.meta.env.VITE_APP_URL + "/"}>
                  <img
                    className="block h-8 w-auto"
                    src="https://i.planetamexico.com.mx/images/2017/1222/1306550-clima-polar-del-pacifico-20171222164519646.jpg"
                    alt="Workflow"
                  />
                </Link>
              </div>
            </div>
            <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
              <div className="w-full sm:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search />
                  </div>
                  <input
                    autoComplete="off"
                    id="search"
                    name="search"
                    className="block w-full rounded-sm py-2 outline-none pl-10 pr-3 sm:text-sm sm:leading-6"
                    placeholder="Buscar entre productos y servicios"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
              <div className="relative ml-4 inline-flex w-full gap-4">
                {!userData && (
                  <>
                    <Button variant={"secondary"}>
                      <Link to={"/register"}>Registrarse</Link>
                    </Button>
                    <Button variant={"primary"}>
                      <Link to={"/login"}>Iniciar sesión</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
          <nav
            className="hidden lg:flex lg:space-x-8 lg:py-2"
            aria-label="Global"
          >
            <TextLine redirectTo={"/articles"}>Productos</TextLine>
            <TextLine redirectTo={"/request-service"}>
              Servicios
            </TextLine>
            {userData &&
              userData[0].id_tipo_usuario &&
              userData[0].id_tipo_usuario === 1 && (
                <TextLine redirectTo={"/dashboard"}>Panel de control</TextLine>
              )}
            {userData && <Button onClick={logout}>Cerrar sesión</Button>}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nbar;
