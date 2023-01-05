import axios from "axios";
import { useState, useEffect } from "react";
import CardEstacionamiento from "./CardEstacionamiento";

const ContainerEstacionamientos = () => {
  const [listEstacionamientos, setListEstacionamientos] = useState([]);
  const API_BASE_URL = "http://localhost:8080";

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(`${API_BASE_URL}/estacionamientos`);
        console.log(response.data);
        setListEstacionamientos(response.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {listEstacionamientos && listEstacionamientos.length > 0 ? (
        listEstacionamientos.map((estacionamiento) => {
          return (
            <CardEstacionamiento
              key={estacionamiento.id}
              nombre={estacionamiento.nombre}
              direccion={estacionamiento.direccion}
              lugDisp={estacionamiento.lugares_disponibles}
              horaCierre={estacionamiento.hora_cierre}
            />
          );
        })
      ) : (
        <div>No hay estacionamientos disponibles</div>
      )}
    </>
  );
};
export default ContainerEstacionamientos;
