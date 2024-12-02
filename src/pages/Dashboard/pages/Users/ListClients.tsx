import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Tables from "../../components/Tables";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button";

function handleDeleteUser(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
  fetch(import.meta.env.VITE_API_URL + "/deleteUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: (event.target as HTMLButtonElement).value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        window.location.reload();
      }
    });
}

function ListClients() {
  interface User {
    id_usuario: number;
    nombre_completo: string;
    correo_usuario: string;
    rol: string;
  }

  const [listUsers, setListUsers] = React.useState<User[]>([]);
  
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
      });
  }, []);
  
  return (
    <DashboardLayout title="Clientes">
      <div className="flex-grow p-6 ml-[235px] flex flex-wrap justify-center items-start container mx-auto ">
        

        <Tables>
          <div className="w-full bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Listado de clientes</h2>

            {/* Responsive Wrapper */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200">Nombre</th>
                    <th className="py-2 px-4 border-b border-gray-200">Correo</th>
                    <th className="py-2 px-4 border-b border-gray-200">Tipo de usuario</th>
                  </tr>
                </thead>
                <tbody>
                {(() => {
                    const userDataString = localStorage.getItem('userData');
                    const userData = userDataString ? JSON.parse(userDataString) : null;

                    return userData && userData[0].id_tipo_usuario === 1 
                      ? listUsers
                        .filter(user => user.rol === 'cliente')
                        .map((user) => (
                          <tr key={user.id_usuario}>
                            <td className="py-2 px-4 border-b border-gray-200 text-center">{user.nombre_completo}</td>
                            <td className="py-2 px-4 border-b border-gray-200 text-center">{user.correo_usuario}</td>
                            <td className="py-2 px-4 border-b border-gray-200 text-center">{user.rol}</td>
                            <td className="py-2 px-4 border-b border-gray-200 text-center">
                              {/* Responsive Button Grid */}
                            </td>
                          </tr>
                        ))
                      : null
                  })()}
                </tbody>
              </table>
            </div> {/* End of Responsive Wrapper */}
          </div>
        </Tables>
      </div>
    </DashboardLayout>
  );
}

export default ListClients; 