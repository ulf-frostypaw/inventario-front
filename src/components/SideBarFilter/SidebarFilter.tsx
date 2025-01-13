import React, { useState } from "react";
import Heading from "../SectionHeader/Heading";
import "./SideBarFilter.css";

function SidebarFilter() {
  // Define tipos para las opciones de cada sección
  type Brand = "Todos" | "Daikin" | "Carrier";
  type Type = "Industrial" | "Mini Split" | "Split";

  // Estados separados para cada sección
  const [activeBrand, setActiveBrand] = useState<Brand>("Todos");
  const [activeType, setActiveType] = useState<Type>("Industrial");

  // Función para manejar el clic en "Marcas"
  const handleBrandClick = (brand: Brand) => {
    setActiveBrand(brand);
  };

  // Función para manejar el clic en "Tipo"
  const handleTypeClick = (type: Type) => {
    setActiveType(type);
  };

  return (
    <div className="top-28 lg:sticky">
      <Heading
        className="mb-0"
        desc={""}
        title={null}
        isCenter={false}
        isMain={false}
        props={undefined}
      >
        Filtrar por:
      </Heading>
      <div className="divide-y divide-neutral-300 container">
        {/* Sección de Marcas */}
        <div className="relative flex flex-col space-y-4 pb-8 ">
          <h3 className="mb-2.5 text-xl font-medium">Marcas</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleBrandClick("Todos")}
              className={`rounded-lg py-4 ${
                activeBrand === "Todos" ? "bg-primary text-white" : "bg-gray"
              }`}
            >
              Todos
            </button>
            <button
              type="button"
              onClick={() => handleBrandClick("Daikin")}
              className={`rounded-lg py-4 ${
                activeBrand === "Daikin" ? "bg-primary text-white" : "bg-gray"
              }`}
            >
              Daikin
            </button>
            <button
              type="button"
              onClick={() => handleBrandClick("Carrier")}
              className={`rounded-lg py-4 ${
                activeBrand === "Carrier" ? "bg-primary text-white" : "bg-gray"
              }`}
            >
              Carrier
            </button>
          </div>
        </div>

        {/* Sección de Tipo */}
        <div className="relative flex flex-col space-y-4 pb-8 ">
          <h3 className="mb-2.5 text-xl font-medium mt-4">Tipo</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleTypeClick("Industrial")}
              className={`rounded-lg py-4 ${
                activeType === "Industrial" ? "bg-primary text-white" : "bg-gray"
              }`}
            >
              Industrial
            </button>
            <button
              type="button"
              onClick={() => handleTypeClick("Mini Split")}
              className={`rounded-lg py-4 ${
                activeType === "Mini Split" ? "bg-primary text-white" : "bg-gray"
              }`}
            >
              Mini Split
            </button>
            <button
              type="button"
              onClick={() => handleTypeClick("Split")}
              className={`rounded-lg py-4 ${
                activeType === "Split" ? "bg-primary text-white" : "bg-gray"
              }`}
            >
              Split
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarFilter;
