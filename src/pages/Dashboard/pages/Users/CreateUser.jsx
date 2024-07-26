import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Button from "../../../../components/Button";
import { useParams, Link } from "react-router-dom";

function CreateUser() {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    email: "",
    nombre_completo: "",
    username: "",
    role: "3", 
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(import.meta.env.VITE_API_URL + "/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        nombre_completo: userData.nombre_completo,
        password: userData.password,
        role: userData.role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        if (data.status === 200) {
          alert(data.message);
          // Puedes redirigir o hacer otra acción aquí
        } else {
          alert("Error: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un problema al crear el usuario.");
      });
  };

  return (
    <DashboardLayout title="Agregar Usuarios">
      <div className="flex-grow p-6 ml-[235px] flex flex-wrap justify-center items-start container mx-auto ">
        <div className="w-full mx-auto bg-white dark:bg-gray-900 shadow-lg shadow-slate-600 rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 dark:text-gray-200">
            Crear nuevo usuario
          </h1>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nombre_completo"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="nombre_completo"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Nombre Completo"
                  autoComplete="name"
                  value={userData.nombre_completo}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      nombre_completo: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
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
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Contraseña"
                  autoComplete="new-password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Rol
                </label>
                <select
                  name="role"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={userData.role}
                  onChange={(e) =>
                    setUserData({ ...userData, role: e.target.value })
                  }
                  required
                >
                  <option value="1">Administrador</option>
                  <option value="2">Técnico</option>
                  <option value="3">Cliente</option>
                  <option value="4">Secretaria</option>
                </select>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-full"
                >
                  Guardar Cambios
                </Button>
              </div>
              <div>
                <Button variant="danger" className="w-full">
                  <Link to={import.meta.env.VITE_APP_URL + "/dashboard/users"}>
                    Volver
                  </Link>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CreateUser;