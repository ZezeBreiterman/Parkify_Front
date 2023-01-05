import React, { useState } from "react";
import "./Css/LoginForm.css"

function LoginForm() {
  const [formData, setFormData] = useState({
    mail: "",
    contraseña: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // Enviar los datos del formulario al servidor aquí
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="mail">Correo electrónico:</label>
      <input
        type="email"
        id="mail"
        name="mail"
        value={formData.mail}
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
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
export default LoginForm