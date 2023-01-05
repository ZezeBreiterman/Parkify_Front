import React, { useState } from "react";
import axios from "axios";

const FormCrearGarage = () => {
  const [formValues, setFormValues] = useState({
    nombre: "",
    direccion: "",
    lugares_totales: "",
    lugares_disponibles: "",
    hora_apertura: "",
    hora_cierre: "",
  });
  const actualizarEstado = (e, name) => {
    e.preventDefault();
    var newValues = { ...formValues };
    newValues[name] = e.target.value;
    setFormValues(newValues);
  };

  const API_BASE_URL = "http://localhost:8080";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      const fetchData = async () => {
        console.log("pre response");
        const response = await axios.post(
          `${API_BASE_URL}/crearEstacionamiento`,
          {
            form: formValues,
          }
        );
        console.log(response.data);
        console.log("Post Response");
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <input
        name="nombre"
        placeholder="Nombre Estacionamiento"
        onChange={(e) => actualizarEstado(e, "nombre")}
      ></input>
      <input
        name="direccion"
        placeholder="Dirección"
        onChange={(e) => actualizarEstado(e, "direccion")}
      ></input>
      <input
        name="lugares_totales"
        placeholder="Lugares totales"
        onChange={(e) => actualizarEstado(e, "lugares_totales")}
      ></input>
      <input
        name="lugares_disponibles"
        placeholder="Lugares Disponibles"
        onChange={(e) => actualizarEstado(e, "lugares_disponibles")}
      ></input>
      <input
        name="hora_apertura"
        placeholder="Horario de apertura"
        onChange={(e) => actualizarEstado(e, "hora_apertura")}
      ></input>

      <input
        name="hora_cierre"
        placeholder="Horario de cierre"
        onChange={(e) => actualizarEstado(e, "hora_cierre")}
      ></input>

      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default FormCrearGarage;
