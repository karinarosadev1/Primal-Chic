import React from 'react'
import '../Styles/GaleriaIntereses.css';
//Sintaxis en React de evento 
// <button onClick={miFuncion}>Haz clic</button>

function GaleriaIntereses({ temas }) {
  return (

    <div className="galeria-container">
      <h1>Galeria de intereses</h1>
      {temas.map((tema, i) => (
        <button
          key={i}
          className="tema-button"
          onClick={(event) => {
            event.target.style.backgroundColor = "red";
            event.target.style.color = "white";
          }}
        >
          {tema}
        </button>
      ))}
    </div>
  );
}

export default GaleriaIntereses;



