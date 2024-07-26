import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Button from "../../../components/Button";

function EditUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    alert("Formulario enviado");
  };
  return (
    <DashboardLayout title="Agregar Usuarios">
      <div className="flex items-center justify-center min-h-screen m-auto bg-gray-100">
        <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
          <div className="bg-white dark:bg-gray-900 shadow-lg shadow-slate-600 rounded-lg px-8 py-6 max-w-md w-full">
            <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
              Nuevo usuario
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                  autoComplete="name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  name="username"
                  className="shadow-sm rounded-md w-full mb-2 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Gurrumino69"
                  autoComplete="username"
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
                  Contraseña
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
              </div>
              <Button variant="primary" type="submit">
                Registrarse
              </Button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default EditUser;
