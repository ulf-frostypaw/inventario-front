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
import { faGithub, faVuejs } from "@fortawesome/free-brands-svg-icons";
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
        className={`w-64 bg-[#061c33] fixed h-[100%] flex flex-col ${
          isOpen ? "translate-x-0 transition-transform duration-300" : "-translate-x-[80%] transition-transform duration-300"
        }`}
      >
        <div className="flex items-center justify-start text-white text-2xl font-bold py-4">
          <div className="text-center text-white text-2xl font-bold py-4 ml-12 mr-4">
            Clima polar
          </div>
          <button onClick={toggleSidebar} className="ml-3 cursor-pointer">
            <FontAwesomeIcon className={isOpen ? "rotate-0 transition-transform duration-300" : "rotate-180 transition-transform duration-300"} icon={faChevronLeft} />
          </button>
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
        {/* <div className="p-4 rounded-b-lg hover:bg-blue-700 bg-blue-600 flex items-center justify-center cursor-pointer">
           <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
           Logout
         </div> */}
      </div>
    </div>
  );
};
// const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex">
//       <div className={`fixed top-0 left-0 h-full w-64 bg-indigo-500 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-[80%]'}`}>
//         <h2 className="text-white">Sidebar</h2>
//         <button onClick={toggleSidebar} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
//           Toggle Sidebar
//         </button>
//       </div>
//       <div className="flex-grow p-4">
//         <main>
//           <h1>Main Content</h1>
//         </main>
//       </div>
//     </div>
//   );
// };

export default Sidebar;
