import CointainerEstacionamientos from "./components/ContainerEstacionamientos";
import "./App.css";
import FormCrearGarage from "./components/FormCrearGarage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ErrorNotFound from "./components/ErrorNotFound";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {user ? (
        <button onClick={() => setUser(null)}>Log Out</button>
      ) : (
        <button onClick={() => setUser("user")}>Log In</button>
      )}
      <h1>Usuario: {user}</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<CointainerEstacionamientos />} />
          <Route exact path="/createGarage" element={<FormCrearGarage />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/Register" element={<RegisterForm />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
