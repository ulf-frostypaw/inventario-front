import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Tables from "../../components/Tables";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button";

function handleDeleteUser(event) {
  event.preventDefault();
  fetch(import.meta.env.VITE_API_URL + "/deleteUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: event.target.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        //alert(data.message);
        window.location.reload();
      }
    });
}
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
        <div className="w-full flex justify-end mb-4">
          <Button variant={"primary"}>
            <Link to={import.meta.env.VITE_APP_URL + "/dashboard/users/createUser"}>
              Agregar Usuario
            </Link>
          </Button>
        </div>

        <Tables>
          <div className="w-full bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Listado de usuarios</h2>

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
                {listUsers.map((user, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-200 text-center">
                      {user.nombre_completo}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-center">
                      {user.correo_usuario}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-center">
                      {user.rol}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-center">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Button variant={"primary"}>
                            <Link
                              to={
                                import.meta.env.VITE_APP_URL +
                                "/dashboard/users/editUser/" +
                                user.id_usuario
                              }
                            >
                              Modificar
                            </Link>
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant={"danger"}
                            onClick={handleDeleteUser}
                            value={user.id_usuario}
                          >
                            Eliminar
                          </Button>
                        </div>
                      </div>
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
