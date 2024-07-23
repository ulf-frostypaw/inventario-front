// Sidebar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faEdit,
  faColumns,
  faDesktop,
  faPalette,
  faUser,
  faLock,
  faExclamationTriangle,
  faBars,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faVuejs } from "@fortawesome/free-brands-svg-icons";

const Sidebar = ({children}) => {
  return (
    <div className="p-3 h-screen">
      <div className=" w-64 bg-slate-800 fixed rounded-lg h-[96%] text-white flex flex-col">
        <div className="text-center text-2xl font-bold py-4">
          {children}
        </div>
        <nav className="flex-1">
          <ul>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <FontAwesomeIcon icon={faColumns} className="mr-3" />
              Dashboard
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <FontAwesomeIcon icon={faTable} className="mr-3" />
              Tables
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <FontAwesomeIcon icon={faEdit} className="mr-3" />
              Forms
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <FontAwesomeIcon icon={faPalette} className="mr-3" />
              Styles
            </li>
            <li className="flex hover:bg-slate-900 cursor-pointer items-center p-4 hover:bg-gray-700">
              <FontAwesomeIcon icon={faUser} className="mr-3" />
              <a href="http://localhost:5173/usuarios">Usuarios</a>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <FontAwesomeIcon icon={faLock} className="mr-3" />
              Login
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <FontAwesomeIcon icon={faGithub} className="mr-3" />
              GitHub
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <FontAwesomeIcon icon={faVuejs} className="mr-3" />
              Vue version
            </li>
          </ul>
        </nav>
        <div className="p-4 rounded-b-lg hover:bg-blue-700 bg-blue-600 flex items-center justify-center cursor-pointer">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
