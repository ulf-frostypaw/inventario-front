import React from "react";
import Layout from "../components/Layout";
import Heading from "../components/SectionHeader/Heading";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Servicios() {
  return (
    <Layout title={"Servicios"}>
      <Heading
        className="p-4"
        isCenter
        isMain
        desc="Este sitio sigue en construcción, por favor regrese mas tarde."
      >
        Sitio en desarrollo.
        <Button variant={"primary"}>
            <Link to={import.meta.env.VITE_APP_URL}>Volver a inicio</Link>
        </Button>
      </Heading>
    </Layout>
  );
}

export default Servicios;
