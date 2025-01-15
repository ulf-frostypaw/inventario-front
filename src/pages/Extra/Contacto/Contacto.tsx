import React from "react";
import Register from "@/pages/Forms/Register";
import Layout from "@/components/Layout";
import "./Contacto.css";
import Map from "./components/Map";

export default function Contacto() {
  return (
    <Layout title="Contactanos">
      <div className="contactoContainer">
        <h1 className="h1Contacto">Contacto</h1>
        <div className="registerdiv">
          <div className="registerDiv">
            <Register />
          </div>
          <div className="mapDiv">
            <Map />
          </div>
        </div>
      </div>
    </Layout>
  );
}
