import Sidebar from "../components/SideBarDasboard";

const LeerUsuarios = () => {
  return (
    <>
      <div className="bg-slate-700 w-full h-full flex">
        <div className="mr-[235px]">
          <Sidebar children="Usuarios" />
        </div>
        <div className="m-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Usuarios</h2>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">ID</th>
                <th className="py-2 px-4 border-b border-gray-200">Nombre</th>
                <th className="py-2 px-4 border-b border-gray-200">Apellido</th>
                <th className="py-2 px-4 border-b border-gray-200">Correo</th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Fecha de nacimiento
                </th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Tipo de usuario
                </th>
                <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Aquí puedes mapear tus datos de usuario */}
              <tr>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  1
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  Juan
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  Pérez
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  juan@example.com
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  01/01/1990
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  Admin
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
              {/* Fin del mapeo de datos de usuario */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeerUsuarios;
