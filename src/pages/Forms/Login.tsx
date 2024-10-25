import React, { useContext, useState } from "react";
import "../../styles/Login.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { AuthContext } from "../../components/Auth/AuthContext"; // Asegúrate de que la ruta sea correcta
import AlertCard from "../../components/Alerts/AlertCard";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState<{ status?: number; message?: string }>({});
  const authContext = useContext(AuthContext);

  const { login } = authContext;

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData);
        if (responseData.status === 200) {
          const userData = responseData.data; // Simulación de datos de usuario
          login(userData); // Llama a la función login
          window.location.href = "/"; // Redirige a la página principal
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950 px-4 phone:px-6 tablet:px-8">
      <div className="bg-white dark:bg-gray-900 shadow-xl shadow-slate-300 rounded-lg px-8 py-6 max-w-xs w-full phone:max-w-sm tablet:max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200 phone:text-2xl tablet:text-3xl">
          ¡Hola, de nuevo!
        </h1>
        {data.status === 400 && <AlertCard message={data.message} />}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 phone:text-sm tablet:text-base"
            >
              Ingrese su correo electrónico:
            </label>
            <input
              type="email"
              name="email"
              className="shadow-sm rounded-md text-xs w-full px-3 py-2 border border-neutral-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 phone:text-sm tablet:text-base"
              placeholder="email@dominio.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-xs phone:text-sm tablet:text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Ingrese su contrase&ntilde;a:
            </label>
            <input
              type="password"
              className="shadow-sm rounded-md text-xs phone:text-sm tablet:text-base w-full px-3 py-2 border border-neutral-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="********"
              autoComplete="current-password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex pt-4 justify-between text-sm">
              <Link
                to="#"
                className="text-[10px] phone:text-xs tablet:text-sm text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Olvidó su contrase&ntilde;a?
              </Link>
              <Link
                to="/register"
                className="text-[10px] phone:text-xs tablet:text-sm text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                No tiene cuenta?
              </Link>
            </div>
          </div>

          <Button variant="primary">
            <button type="submit">Iniciar sesion</button>
          </Button>
        </form>
      </div>
    </div>
  );
}
