//import TarjetaMiembro from "./TarjetaMiembro";
//la declaracion de la variable moembros debe ir denro de la funcion fuera del return
import React from 'react'
import '../Styles/Equipo.css'

function Equipo() {

    const miembros = [
        { name: 'Silvia', rol: "Product Owner", image: "#" },
        { name: 'Luis', rol: "Product Owner", image: "#" },
        { name: 'Matias', rol: "Product Owner", image: "#" },
        { name: 'Sabrina', rol: "Product Owner", image: "#" },
    ];


    return (
        <>
            <h2>Nuestro Equipo</h2>
            <ul className="TarjetaMiembro">
                {miembros.map(miembro => (

                    <li key={miembro.id}>
                       <img src={miembro.image} alt={miembro.name} />
                        <p>Nombre: {miembro.name}</p>
                        <p>Rol: {miembro.rol}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Equipo

