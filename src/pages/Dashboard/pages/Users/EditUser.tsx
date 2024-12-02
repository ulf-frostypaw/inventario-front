import { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Button from "../../../../components/Button";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    email: "",
    nombre_completo: "",
    username: "",
    role: "",
    password: "",
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetch(import.meta.env.VITE_API_URL + "/updateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        email: userData.email,
        nombre_completo: userData.nombre_completo,
        role: userData.role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          alert(data.message);
          //window.location.reload();
        }

      });
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/getUserData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Asegúrate de que `data` sea un objeto y no un array
        if (data && data.length > 0) {
          setUserData({
            email: data[0].correo_usuario,
            nombre_completo: data[0].nombre_completo,
            username: userData.username, // Preserve existing username
            role: data[0].id_tipo_usuario || "", // Asegúrate de que el rol esté en el objeto
            password: userData.password, // Preserve existing password
          });
        }
      });
  }, [id]);

  return (
    <DashboardLayout title="Editar usuario">
      <div className="flex-grow p-6 ml-[235px] flex flex-wrap justify-center items-start container mx-auto ">
        <div className="w-full mx-auto bg-white dark:bg-gray-900 shadow-lg shadow-slate-600 rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 dark:text-gray-200">Editar usuario</h1>
          <form className="w-full">
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
                  placeholder="Your Name"
                  autoComplete="name"
                  value={userData.nombre_completo} // Acceso correcto al objeto
                  onChange={(e) => setUserData({ ...userData, nombre_completo: e.target.value })}
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
                  placeholder="your@email.com"
                  autoComplete="email"
                  value={userData.email} // Acceso correcto al objeto
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
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
                  onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                  required
                >
                  <option value="1">Administrador</option>
                  <option value="2">Técnico</option>
                  <option value="3">Cliente</option>
                  <option value="4">Secretaria ventas</option>
                  <option value="5">Secretaria compras</option>
                </select>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <Button onClick={handleSubmit} variant="primary" className="w-full">
                  Guardar Cambios
                </Button>
              </div>
              <div>
                <Button variant="danger" className="w-full">
                  <Link to={import.meta.env.VITE_APP_URL + "/dashboard/users"}>Volver</Link>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default EditUser;