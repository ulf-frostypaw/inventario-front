import React, { useContext, useState } from "react";
import "../../styles/Login.css";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import AlertCard from "@/components/Alerts/AlertCard";
import { AuthContext } from "@/components/Auth/AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState<{ status?: number; message?: string }>({});
  const authContext = useContext(AuthContext);

  const { login } = authContext;

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, password }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData);
        if (responseData.status === 200) {
          // alert("Usuario creado exitosamente");
          const userData = responseData.data;
          login(userData);
          window.location.href = "/";
        }/*  else if (responseData.status === 400) {} */
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950 phone:px-6 tablet:px-8">
      <div className="bg-white dark:bg-gray-900 shadow-xl shadow-slate-300 rounded-lg px-8 py-6 max-w-xs w-full phone:max-w-sm tablet:max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200 phone:text-2xl tablet:text-3xl">
          Registrate
        </h1>
        {data.status === 400 && (
          <AlertCard message={data.message || ""} />
        )}
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 phone:text-sm tablet:text-base"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs phone:text-sm tablet:text-base"
              placeholder="Juan Perez"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 phone:text-sm tablet:text-base"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs phone:text-sm tablet:text-base"
              placeholder="your@email.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 phone:text-sm tablet:text-base"
            >
              Contraseña
            </label>
            <input
              type="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs phone:text-sm tablet:text-base"
              placeholder="Enter your password"
              autoComplete="current-pasword"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex pt-4 justify-between">
              <Link
                to="/login"
                className="text-[10px] text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 phone:text-xs tablet:text-sm"
              >
                ¿Ya tiene una cuenta?
              </Link>
            </div>
          </div>

          <Button variant="primary">
            <button type="submit">Registrarse</button>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
