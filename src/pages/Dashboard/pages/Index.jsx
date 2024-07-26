import {useState} from "react";
import DashboardLayout from "../components/DashboardLayout";
import Tables from "../components/Tables";

function Index() {
  // aqui vienen los datos estadisticos del panel de administracion
  const [responseData, setResponseData] = useState({});
  fetch(import.meta.env.VITE_API_URL + "/countData", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      setResponseData(responseData);
    });
    
  return (
    <DashboardLayout title="Dashboard">
      <div className="flex-grow p-6 ml-[235px] flex flex-wrap justify-center items-start container mx-auto ">
        {/* Card 1 */}
        <div className="bg-white m-4 p-6 rounded-lg shadow-lg w-1/3 max-w-sm">
          <h3 className="text-xl font-bold mb-4">Total de usuarios</h3>
          <p className="text-gray-700 text-3xl">{responseData.countUsers}</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white m-4 p-6 rounded-lg shadow-lg w-1/3 max-w-sm">
          <h3 className="text-xl font-bold mb-4">Total de productos</h3>
          <p className="text-gray-700 text-3xl">{responseData.countProducts}</p>
        </div>
        {/* <Tables /> */}
      </div>
      </DashboardLayout>
    
  );
}

export default Index;
