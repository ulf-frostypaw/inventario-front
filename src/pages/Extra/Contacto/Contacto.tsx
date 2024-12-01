import react from "react";
import Register from "@/pages/Forms/Register";
import Layout from "@/components/Layout";
import "./Contacto.css";
import Map from "./components/Map";

export default function Contacto() {
  return (
    <Layout title="Contactanos">
      <h1 className="h1Contacto">Contacto</h1>
      <div className="registerdiv">
        <div className="registerDiv">
          <Register></Register>
        </div>
        <div className="mapDiv">
          <Map></Map>
        </div>
      </div>
    </Layout>
  );
}
