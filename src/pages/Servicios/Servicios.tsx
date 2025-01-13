import React from "react";
import Acordeon from "@/components/RequestService/Acordeon/AcordeonApp";
import NavBar from "@/components/Navbar/Navbar";
import "./Servicios.css";
import FormularioServicio from "@/components/RequestService/FormularioServicio/FormularioServicio";
import Layout from "@/components/Layout";


function Servicios() {
  return (
    <>
      <Layout title={"Servicios"}>
      <div className="formService">
        <FormularioServicio />
      </div>
      <div className="acordeonContainer">
        <h1 className="pregu">Preguntas Frecuentes</h1>
        <hr className="hr100" />
        <Acordeon />
      </div>
      </Layout>
    </>
  );
}

export default Servicios;
