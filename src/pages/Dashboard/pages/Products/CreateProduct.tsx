import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Button from "../../../../components/Button";
import { useParams, Link } from "react-router-dom";

function CreateProduct() {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    nombre_producto: "",
    descripcion: "",
    stock: 1,
    precio_costo: 0,
    precio_venta: 0,
    categoria: "",
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetch(import.meta.env.VITE_API_URL + "/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre_producto: userData.nombre_producto,
        descripcion: userData.descripcion,
        stock: userData.stock,
        precio_costo: userData.precio_costo,
        precio_venta: userData.precio_venta,
        categoria: userData.categoria,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          alert(data.message);
          // Puedes redirigir o hacer otra acción aquí
        } else {
          alert("Error: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un problema al crear el producto.");
      });
  };

  return (
    <DashboardLayout title="Agregar Producto">
      <div className="flex-grow p-6 ml-[235px] flex flex-wrap justify-center items-start container mx-auto ">
        <div className="w-full mx-auto bg-white dark:bg-gray-900 shadow-lg shadow-slate-600 rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 dark:text-gray-200">
            Crear nuevo producto
          </h1>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nombre_producto"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  name="nombre_producto"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Nombre del Producto"
                  value={userData.nombre_producto}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      nombre_producto: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="descripcion"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Descripción
                </label>
                <textarea
                  name="descripcion"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Descripción del producto"
                  value={userData.descripcion}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      descripcion: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Stock"
                  value={userData.stock}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      stock: Number(e.target.value),
                    })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="precio_costo"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Precio Costo
                </label>
                <input
                  type="number"
                  name="precio_costo"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Precio Costo"
                  value={userData.precio_costo}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      precio_costo: Number(e.target.value),
                    })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="precio_venta"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Precio Venta
                </label>
                <input
                  type="number"
                  name="precio_venta"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Precio Venta"
                  value={userData.precio_venta}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      precio_venta: Number(e.target.value),
                    })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="categoria"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Categoría
                </label>
                <input
                  type="text"
                  name="categoria"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Categoría"
                  value={userData.categoria}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      categoria: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <Button variant="primary"  className="w-full">
                  Guardar Cambios
                </Button>
              </div>
              <div>
                <Button variant="danger" className="w-full">
                  <Link to={import.meta.env.VITE_APP_URL + "/dashboard/products"}>
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

export default CreateProduct;
