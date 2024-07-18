import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Visualizacion from "../components/Visualizacion";
import Layout from "../components/Layout";
import Nbar from "../components/Nbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

export const App = () => {
  const {id} = useParams();
  return (
    <Layout title="Visualización de datos">
      <div className="container">
        <Visualizacion />
      </div>
    </Layout>
  );
};

export default App;
