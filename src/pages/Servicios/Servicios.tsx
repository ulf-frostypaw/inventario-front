import React from "react";
import Acordeon from "@/components/Acordeon/AcordeonApp";
import NavBar from "@/components/Navbar/Navbar";
import "./Servicios.css";

function Servicios() {
  return (
    <>
      <NavBar />
      <h1 className="servicios">Servicios</h1>
      <div className="acordeonContainer">
        <h1 className="pregu">Preguntas Frecuentes</h1>
        <hr className="hr100"/>
        <Acordeon />
      </div>
    </>
  );
}

export default Servicios;
