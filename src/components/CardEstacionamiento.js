import React from 'react'
import "./Css/CardEstacionamiento.css"
const CardEstacionamiento = ({nombre, direccion, lugDisp, horaCierre}) => {

    return(
        <div className='card'>
        <h3>{nombre}</h3>
        <p>{direccion}</p>
        <p>Disponible: {lugDisp}</p>
        <p>Cierra a las: {horaCierre}</p>
        <button className='button'>Reservar</button>
        </div>
    )
}
export default CardEstacionamiento