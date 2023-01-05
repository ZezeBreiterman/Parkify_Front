import axios from "axios";
import React, { useState } from "react";
import "./Css/RegisterForm.css";
function RegisterForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    mail: "",
    telefono: "",
    contraseña: "",
    tipo_usuario: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const fetchData = async () => {
        const API_BASE_URL = "http://localhost:8080";
        await axios.post(`${API_BASE_URL}/crearUsuario`, {
          form: formData,
        });
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="apellido">Apellido:</label>
      <input
        type="text"
        id="apellido"
        name="apellido"
        value={formData.apellido}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="mail">Correo electrónico:</label>
      <input
        type="email"
        id="mail"
        name="mail"
        value={formData.mail}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="telefono">Teléfono:</label>
      <input
        type="text"
        id="telefono"
        name="telefono"
        value={formData.telefono}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="contraseña">Contraseña:</label>
      <input
        type="password"
        id="contraseña"
        name="contraseña"
        value={formData.contraseña}
        onChange={handleInputChange}
      />
      <br />
      <button type="submit">Registrarse</button>
    </form>
  );
}
export default RegisterForm;
