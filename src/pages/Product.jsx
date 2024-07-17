import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Visualizacion from "../components/Visualizacion";
import Nbar from "../components/Nbar";
import Footer from "../components/Footer";


export const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
        <Nbar />
        <Visualizacion />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
