import React, { useState } from "react";
import "../../styles/Login.css";
import { Link } from "react-router-dom";
/* import User from "../../icons/User";
import Pass from "../../icons/Pass"; */

export default function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Manejar el envío de formularios, por ejemplo, enviar datos a API
  //   console.log("Username:", username);
  //   console.log("Password:", password);
  // };

  return (
    <div className="login">
      <form action="">
        <h1>Hola, de nuevo.</h1>
        <div className="inputBox">
          <input type="text" placeholder="Nombre de Usuario" required />
          {/* <User /> */}
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Contraseña" required />
          {/* <Pass /> */}
        </div>


        <button type="submit" className="btn">
          Iniciar sesion
        </button>

        <div className="createAccount">
          <p>
            <Link to={"/"}>¿Olvido su Contraseña?</Link>
            
          </p>
          <p>
            <Link to="#">¿Aún no tiene una cuenta?</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
