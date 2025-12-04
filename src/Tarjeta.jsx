
import './tarjeta.css'
import MyButton from './MyButton.jsx'

function Tarjeta({ titulo, descripcion, botonTexto }) {
  return (
    <div className='tarjeta'>
      <h2>{titulo}</h2>
      <h3>{descripcion}</h3>
      <MyButton 
        onClick={() => alert("Estoy aquí")} 
        text={botonTexto} 
        color="#333333" 
      />      
    </div>
  )
}

export default Tarjeta
