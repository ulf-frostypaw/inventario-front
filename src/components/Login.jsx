import React, { useState } from "react";
import "../styles/Login.css";
import User from "./icons/User";
import Pass from "./icons/Pass";

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
            <h1>Login</h1>
            <div className="inputBox">
                <input type="text" placeholder="Nombre de Usuario" required/>
                <User />
            </div>
            <div className="inputBox">
                <input type="password" placeholder="Contraseña" required/>
                <Pass />
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/> Recordarme</label>
                <a href="#">Olvide mi Contraseña</a>
            </div>

            <button type="submit" className="btn">Iniciar sesion</button>

            <div className="createAccount">
                <p>No tiene cuenta?</p><a href="#">Crear Cuenta</a>
            </div>
        </form>
    </div>
  );
}
