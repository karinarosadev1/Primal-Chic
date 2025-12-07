//import TarjetaMiembro from "./TarjetaMiembro";
//la declaracion de la variable moembros debe ir denro de la funcion fuera del return
import React from 'react'
import '../Styles/Equipo.css'

function Equipo({ miembros }) {


    return (
        <>
            <h2>Nuestro Equipo</h2>

            <ul className="TarjetaMiembro">
                {miembros.map((miembro, i) => (

                    <li key={i}>
                        <img className='equipo-image'
                            src={miembro.image}
                            alt={miembro.name} />
                            
                        <p>Nombre: {miembro.name}</p>
                        <p>Rol: {miembro.rol}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Equipo

