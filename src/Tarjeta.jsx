
import './tarjeta.css'
import MyButton from './MyButton.jsx'

function Tarjeta({ titulo, descripcion, botonTexto,onClick }) {
  return (
    <div className='tarjeta'>
      <h2>{titulo}</h2>
      <h3>{descripcion}</h3>

      <MyButton
        text={botonTexto}
        color="#333333"
        onClick={onClick}
      
      />
    </div>
  )
}

export default Tarjeta
