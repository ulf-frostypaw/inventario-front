import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Tables from "../../components/Tables";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button";

function handleDeleteProduct(id_producto: any) {
  fetch(import.meta.env.VITE_API_URL + "/deleteProduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id_producto,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        alert(data.message);
        window.location.reload();
      }
    });
}

function ListProducts() {
  interface Product {
    id_producto: number;
    nombre_producto: string;
    stock: number;
    Categoria: string;
  }

  const [listUsers, setListUsers] = React.useState<Product[]>([]);
  
  React.useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/listProducts", {
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
    <DashboardLayout title="Productos">
      <div className="flex-grow p-6 ml-[235px] flex flex-wrap justify-center items-start container mx-auto ">
        <div className="w-full flex justify-end mb-4">
          <Button variant={"primary"}>
            <Link
              to={import.meta.env.VITE_APP_URL + "/dashboard/products/createProduct"}
            >
              Agregar producto
            </Link>
          </Button>
        </div>

        <Tables>
          <div className="w-full bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Listado de productos</h2>

            {/* Responsive Wrapper */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200">Nombre</th>
                    <th className="py-2 px-4 border-b border-gray-200">Stock</th>
                    <th className="py-2 px-4 border-b border-gray-200">Categoría</th>
                    <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {listUsers.map((item) => (
                    <tr key={item.id_producto}>
                      <td className="py-2 px-4 border-b border-gray-200 text-center">{item.nombre_producto}</td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center">{item.stock}</td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center">{item.Categoria}</td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center">
                        {/* Responsive Button Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Button variant={"primary"}>
                            <Link
                              to={
                                import.meta.env.VITE_APP_URL +
                                "/dashboard/products/editProduct/" +
                                item.id_producto
                              }
                            >
                              Modificar
                            </Link>
                          </Button>
                          <Button
                            variant={"danger"}
                            onClick={() => handleDeleteProduct(item.id_producto)}
                          >
                            Eliminar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> {/* End of Responsive Wrapper */}
          </div>
        </Tables>
      </div>
    </DashboardLayout>
  );
}

export default ListProducts;