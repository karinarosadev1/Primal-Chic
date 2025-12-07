import React from 'react'
import '../Styles/TarjetaProyecto.css'


function TarjetaProyecto({ titulo, descripcion, botonTexto }) {

    return (

        <div className='card-container'>
            <div className='card-body'>
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
                <button onClick={() => alert(`Explorando: ${titulo}`)} >
                    {botonTexto}
                </button>
            </div>
        </div>
    )
}

export default TarjetaProyecto