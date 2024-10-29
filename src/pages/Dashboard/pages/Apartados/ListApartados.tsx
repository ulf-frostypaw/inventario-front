import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Tables from "../../components/Tables";
import Button from "../../../../components/Button";

interface Apartado {
  id_apartado: number;
  id_producto: number;
  status: number;
  status1: string | null;
  id_cliente: number;
  fecha_apartado: string;
  nombre_completo: string;
}

interface ApiResponse {
  status: number;
  data: Apartado[];
}

function ListApartados() {
  const [apartados, setApartados] = React.useState<Apartado[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchApartados = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/listApartados`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: ApiResponse = await response.json();
      
      if (result.status === 200) {
        setApartados(result.data);
      } else {
        throw new Error('Failed to fetch apartados');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteApartado = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const id = event.currentTarget.value;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/deleteApartado`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const result: ApiResponse = await response.json();
      
      if (result.status === 200) {
        setApartados(prevApartados => 
          prevApartados.filter(apartado => apartado.id_apartado.toString() !== id)
        );

        alert("Apartado eliminado con éxito");
      } else {
        throw new Error('Failed to delete apartado');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error deleting apartado');
    }
  };

  const handleAtenderApartado = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const id = event.currentTarget.value;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/atenderApartado`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const result: ApiResponse = await response.json();
      
      if (result.status === 200) {
        alert("Apartado atendido con éxito");
      } else {
        throw new Error('Failed to atender apartado');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error attending apartado');
    }
  };

  const getStatusText = (status: number) => {
    switch (status) {
      case 1:
        return "Activo";
      case 2:
        return "Pendiente";
      case 3:
        return "Completado";
      default:
        return "Desconocido";
    }
  };

  React.useEffect(() => {
    fetchApartados();
  }, []);

  if (isLoading) {
    return (
      <DashboardLayout title="Apartados">
        <div className="flex-grow p-6 ml-[235px] flex justify-center items-center">
          <p>Cargando...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout title="Apartados">
        <div className="flex-grow p-6 ml-[235px] flex justify-center items-center">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Apartados">
      <div className="flex-grow p-6 ml-[235px] flex flex-wrap justify-center items-start container mx-auto">
        
        <Tables>
          <div className="w-full bg-white p-6 rounded-lg shadow-lg phone:p-12">
            <h2 className="text-2xl font-bold mb-4">Listado de apartados</h2>

            {/* Responsive Wrapper */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200">ID Apartado</th>
                    <th className="py-2 px-4 border-b border-gray-200">ID Producto</th>
                    <th className="py-2 px-4 border-b border-gray-200">Status</th>
                    <th className="py-2 px-4 border-b border-gray-200">ID Cliente</th>
                    <th className="py-2 px-4 border-b border-gray-200">Fecha Apartado</th>
                    <th className="py-2 px-4 border-b border-gray-200">Nombre Completo</th>
                    <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {apartados.map((apartado) => (
                    <tr key={apartado.id_apartado}>
                      <td className="py-2 px-4 border-b border-gray-200 text-center">{apartado.id_apartado}</td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center">{apartado.id_producto}</td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center">{getStatusText(apartado.status)}</td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center">{apartado.id_cliente}</td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center">{new Date(apartado.fecha_apartado).toLocaleString()}</td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center">{apartado.nombre_completo}</td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center">
                        {/* Responsive Button Grid */}
                        <div className="grid grid-cols-1 phone:grid-cols-2 gap-4">
                          <Button variant="primary" onClick={handleAtenderApartado} value={apartado.id_apartado}>
                            Atender
                          </Button>
                          <Button variant="danger" onClick={handleDeleteApartado} value={apartado.id_apartado}>
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

export default ListApartados;