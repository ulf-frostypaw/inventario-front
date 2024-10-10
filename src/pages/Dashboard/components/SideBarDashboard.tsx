// Sidebar.js
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
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const urlApp = import.meta.env.VITE_APP_URL;

  return (
    <div className="p-3 h-screen">
      <div className=" w-64 bg-slate-100 fixed rounded-lg h-[96%] flex flex-col">
        <div className="text-center text-2xl font-bold py-4">Clima polar</div>
        <nav className="flex-1">
          <ul>
          <li className="flex items-center p-4 hover:bg-gray-700 hover:bg-slate-200">
              <Link to={urlApp}>Ver sitio</Link>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 hover:bg-slate-200">
              <FontAwesomeIcon icon={faColumns} className="mr-3" />
              <Link to={urlApp + '/dashboard'}>Panel de control</Link>
            </li>
            <li className="flex hover:bg-slate-200 cursor-pointer items-center p-4">
              <FontAwesomeIcon icon={faUser} className="mr-3" />
              <Link to={urlApp + "/dashboard/users"}>Administrar usuarios</Link>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 hover:bg-slate-200">
              <FontAwesomeIcon icon={faTable} className="mr-3" />
              <Link to={urlApp + '/dashboard/products'}>Administrar productos</Link>
            </li>
          </ul>
        </nav>
        {/* <div className="p-4 rounded-b-lg hover:bg-blue-700 bg-blue-600 flex items-center justify-center cursor-pointer">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
          Logout
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
