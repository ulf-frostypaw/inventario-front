import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Tables from "../../components/Tables";
import { list } from "postcss";

function ListUsers() {
  const [listUsers, setListUsers] = React.useState([]);
  React.useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/listUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((listUsers) => {
        setListUsers(listUsers);
        //console.log(JSON.stringify(listUsers));
      });
  }, []);
  return (
    <DashboardLayout title="Usuarios">
      <div className="flex-grow p-6 ml-[235px] flex flex-wrap justify-center items-start container mx-auto ">
        <Tables>
          <div className="w-full bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Usuarios</h2>

            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200">Nombre</th>
                  <th className="py-2 px-4 border-b border-gray-200">Correo</th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Tipo de usuario
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {listUsers.map((user,index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-200 text-center">
                      {user.nombre_completo}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-center">
                      {user.correo_usuario}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-center">
                      {user.id_tipo_usuario}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-center">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600">
                        Modificar
                      </button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Tables>
      </div>
    </DashboardLayout>
  );
}

export default ListUsers;
