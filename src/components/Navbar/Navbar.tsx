import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "@/components/Auth/AuthContext";

function Navbar() {
  const { userData, logout } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={import.meta.env.VITE_APP_URL} className="logo">
          {/* <img src={import.meta.env.VITE_APP_URL + "/ClimaPolar.png"} width={10} alt="" /> */}
          Clima Polar
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <Link
              to={import.meta.env.VITE_APP_URL + "/articles"}
              className="nav-link"
            >
              Productos
            </Link>
          </li>
            <li className="nav-item">
            <Link
            to = {import.meta.env.VITE_APP_URL + "/request-service"}
            className="nav-link" >
              Servicios <FontAwesomeIcon icon={faChevronDown} />
            </Link>
            <div className="dropdown-content">
              <Link to="#">Mantenimiento preventivo</Link>
              <Link to="#">Mantenimiento correctivo</Link>
            </div>
          </li>
        </ul>
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input type="text" placeholder="Buscar productos..." />
        </div>
        <div className="nav-icons">
          <div className="auth-buttons">
            {!userData && (
              <>
                <Link
                  to={import.meta.env.VITE_APP_URL + "/login"}
                  className="auth-button login-button"
                >
                  Ingresar
                </Link>
                <Link
                  to={import.meta.env.VITE_APP_URL + "/register"}
                  className="auth-button signup-button"
                >
                  Crear cuenta
                </Link>
              </>
            )}
            {userData && (
              <ul className="nav-links">
                <li className="nav-item">
                  <li className="nav-item">
                    <span className="nav-link">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <div className="dropdown-content">
                        {userData &&
                        userData[0].id_tipo_usuario &&
                        userData[0].id_tipo_usuario !== 3 && (
                          <Link
                          to={import.meta.env.VITE_APP_URL + "/dashboard"}
                          >
                          Dashboard
                          </Link>
                        )}
                      <button onClick={logout}>Cerrar sesion</button>
                    </div>
                  </li>
                </li>
              </ul>
            )}
          </div>
          {/* <button
            className="icon-btn cart-icon"
            aria-label="Carrito de compras"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <span className="cart-count">3</span>
          </button> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
