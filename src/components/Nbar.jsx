import React from "react";
import Button from "../components/Button";
import Img from "../img/ClimaPolar.jpg";
import { Link, redirect } from "react-router-dom";
import Search from "./icons/Search";
import Bell from "./icons/Bell";

const TextLine = ({ children = [], redirectTo }) => {
  ///console.log(userData);
  
  return (
    <>
      <Link
        className="hover:text-gray-600 hover:underline py-2 px-3 font-medium items-center inline-flex"
        to={import.meta.env.VITE_APP_URL + redirectTo}
        >
        {children}
      </Link>
    </>
  );
};

const Nbar = () => {
  const usuario = localStorage.getItem("userData");
  const userData = usuario ? JSON.parse(usuario).data.correo_usuario : false;
  return (
    <>
      {/* <!-- component --> */}
      <header className="bg-zinc-100 sticky top-0 z-10 shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-teal-700 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="relative z-10 flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center">
                <Link to={import.meta.env.VITE_APP_URL + "/"}>
                  <img
                    className="block h-8 w-auto"
                    src="http://placehold.co/300"
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
                    id="search"
                    name="search"
                    className="block w-full rounded-3xl py-2 outline-none pl-10 pr-3 sm:text-sm sm:leading-6"
                    placeholder="Buscar entre productos y servicios"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="relative z-10 flex items-center lg:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open menu</span>
                {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
              <button
                type="button"
                className="relative flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <Bell />
              </button>

              {/*  <!-- Profile dropdown --> */}
              <div className="relative ml-4 flex-shrink-0">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    {userData ? (
                      <img
                        className="w-12 aspect-square rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    ) : (
                      <Button variant={"primary"}>
                        <Link to={"/login"}>Iniciar sesión</Link>
                      </Button>
                    )}
                  </button>
                </div>

                {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                {/* <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            {/* <!-- Active: "bg-gray-100", Not Active: "" -->
            <a href="#" class="block px-4 py-2 text-sm text-yellow-600" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-yellow-600" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-yellow-600" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div> */}
              </div>
            </div>
          </div>
          <nav className="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <TextLine redirectTo={"/productos"}>Productos</TextLine>
            <TextLine redirectTo={"/servicios"}>Servicios</TextLine>
            <TextLine redirectTo={"/dashboard"}>Dashboard</TextLine>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nbar;
