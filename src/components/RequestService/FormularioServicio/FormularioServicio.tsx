import React, { useState, useEffect } from "react";
import "./FormularioServicio.css";

function handleFormServices(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data: { [key: string]: string } = {};
  formData.forEach((value, key) => {
    data[key] = value as string;
  });

  console.log(data);
}

const FormularioServicio = () => {
  const [minDate, setMinDate] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Verificar si el valor ingresado tiene solo dígitos
    if (/^\d*$/.test(input)) {
      setTelefono(input);

      // Mostrar error si tiene menos de 10 dígitos
      if (input.length > 0 && input.length < 10) {
        setError("El número debe de ser de 10 dígitos");
      } else if (input.length === 10) {
        setError(""); // Eliminar error si cumple con la longitud
      }
    }
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setMinDate(`${year}-${month}-${day}`);
  }, []);

  const validateTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minTime = "09:00";
    const maxTime = "15:00";
    const selectedTime = e.target.value;

    // Si la hora seleccionada está fuera del rango, corrige el valor
    if (selectedTime < minTime) {
      e.target.value = minTime;
    } else if (selectedTime > maxTime) {
      e.target.value = maxTime;
    }
  };

  return (
    <div className="bodyService">
      <h1 className="servicios">Servicios</h1>
      <form onSubmit={handleFormServices}>
        <h2 className="h2Servicio">Tipo de Servicio</h2>
        <select className="SelectService" name="tipo_servicio" id="">
          <option value="mantenimiento_preventivo">
            Mantenimiento preventivo
          </option>
          <option value="mantenimiento_correctivo">
            Mantenimiento correctivo
          </option>
          <option value="instalacion">Instalación</option>
        </select>
        <br />
        <label htmlFor="fecha">Seleccione una fecha:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          className="inputDate"
          min={minDate}
          required
        />
        <br />
        <label htmlFor="hora">Seleccione una hora:</label>
        <input
          type="time"
          id="hora"
          name="hora"
          className="inputTime"
          onChange={validateTime} // Validar en tiempo real
          title="Coloque una hora entre las 9:00 y las 15:00"
          required
        />
        <br />
        <label htmlFor="telefono">Número de teléfono:</label>
        <input
          type="text" // Cambiar a tipo "text" para permitir ceros al inicio
          id="telefono"
          name="telefono"
          className="inputTime"
          placeholder="55 5555 5555"
          value={telefono}
          onChange={handleChange}
          maxLength={10} // Limitar a 10 dígitos
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar error */}
        <br />
        <button type="submit" className="auth-button signup-button">
          Enviar solicitud
        </button>
      </form>
    </div>
  );
};

export default FormularioServicio;
