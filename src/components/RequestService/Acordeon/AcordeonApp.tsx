import React from "react";
import Acordeon from "@/components/RequestService/Acordeon/Acordeon";

const AcordeonApp: React.FC = () => {
  const items = [
    {
      title: "¿Que Es Un Mantenimiento Preventivo?",
      content: "El mantenimiento preventivo consiste en retirar los elementos internos de la evaporadora para limpiarles de la grasa, polvo y partículas dañinas que puedan tener adheridos. Para lograr este proceso de desinfección en el cual deberás desmontar la unidad, limpiar los filtros con agua y jabón, y, retirar la carcasa para continuar con la limpieza.",
    },
    {
        title: "¿Cada Cuanto Deberia De Hacer Un Mantenimiento Preventivo?",
        content: "Para unidades paquete con cuatro o más equipos que se usan de manera moderada, el mantenimiento preventivo ideal debe ser 1 o 2 veces al año. Para un minisplit de uso doméstico, se puede realizar un chequeo al año o incluso cada dos años, siempre y cuando se realice limpieza al equipo cada 6 meses.",
      },
    {
      title: "¿Que Es Un Mantenimiento Correctivo?",
      content: "El mantenimiento correctivo se realizará con posterioridad, y siempre por avería o mal funcionamiento del aire acondicionado, y tendrá como objetivo identificar el problema y solucionar de inmediato este sistema. El mantenimiento correctivo se ocupa de los problemas desde los más simples hasta los más complejos, que pueden requerir reparaciones en una o más partes, o incluso en todo el sistema.",


    },
    
  ];

  return (
    <div className="App">
      <Acordeon items={items} />
    </div>
  );
};

export default AcordeonApp;