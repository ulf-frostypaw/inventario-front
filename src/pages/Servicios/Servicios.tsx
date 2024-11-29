import React from "react";
import Acordeon from "@/components/Acordeon/AcordeonApp";
import NavBar from "@/components/Navbar/Navbar";
import "./Servicios.css";

function handleFormServices(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  // Crear un objeto FormData a partir del formulario
  const formData = new FormData(e.currentTarget);

  // Convertir FormData a un objeto simple para facilitar la impresión
  const data: { [key: string]: string } = {};
  formData.forEach((value, key) => {
    data[key] = value as string;
  });

  // Imprimir los valores en consola
  console.log(data);
}

function Servicios() {
  return (
    <>
      <NavBar />
      <h1 className="servicios">Servicios</h1>
      <form onSubmit={handleFormServices}>
        <select name="tipo_servicio" id="">
          <option value="mantenimiento_preventivo">Mantenimiento preventivo</option>
          <option value="mantenimiento_correctivo">Mantenimiento correctivo</option>
          <option value="instalacion">Instalación</option>
          <option value="otro">Otro</option>
        </select>
        <br />
        <label htmlFor="content">
          <textarea name="content" id="" placeholder="Brevemente describa su problema"></textarea>
        </label>

        <button type="submit">Enviar solicitud</button>
      </form>
      <div className="acordeonContainer">
        <h1 className="pregu">Preguntas Frecuentes</h1>
        <hr className="hr100" />
        <Acordeon />
      </div>
    </>
  );
}

export default Servicios;