import React, { useContext, useState } from "react";
import "../../styles/Login.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button"
import { AuthContext } from "../../components/Auth/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /* const {email, setEmail} = useContext(AuthContext);
    const {password, setPassword} = useContext(AuthContext); */
    fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          localStorage.setItem('token', data.token);
          alert('Login successful');
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle the error here
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-xl shadow-slate-300 rounded-lg px-8 py-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Welcome Back!
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Contrase&ntilde;a
            </label>
            <input
              type="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              autoComplete="current-password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
           
            <div className="flex pt-4 justify-between">
              <Link
                to="#"
                className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Olvidó su contrase&ntilde;a?
              </Link>
              <Link
                to="/register"
                className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                No tiene cuenta?
              </Link>
            </div>
          </div>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
