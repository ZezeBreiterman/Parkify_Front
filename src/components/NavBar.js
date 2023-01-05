import React from 'react';
import './navbar.css';

function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="navbar">
      <div className="navbar-left">
        Parkify
      </div>
      <div className="navbar-right">
        {user ? (
          <>
            <span className="navbar-username">{user.nombre}</span>
            <button className="navbar-button logout-button">Cerrar sesión</button>
          </>
        ) : (
          <>
            <button className="navbar-button login-button">Iniciar sesión</button>
            <button className="navbar-button register-button">Registrarse</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
