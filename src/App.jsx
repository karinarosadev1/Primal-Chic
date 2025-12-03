// Este archivo define el componente principal de la aplicación.
// Renderiza títulos y varios botones personalizados utilizando el componente MyButton.
// También exporta componentes secundarios (Subtitulo y Button) para que puedan 
// ser usados desde main.jsx. Desde aquí se envían las props (text, color, onClick) 
// hacia MyButton, que las utiliza para crear botones dinámicos.

import './App.css'
import MyButton from './MyButton.jsx'


//App le pasa datos a MyButton a través de props. Ej text="Aceptar" y Estas props viajan al hijo como un objeto→ { text: "Aceptar", color: "green", onClick: () => alert('Aceptaste') }

function App() {

  return (
    <>
   <h1 className='greeting'>Bienvenido a Parcel</h1>
   <h2 className='greeting'>Arte Nativo</h2>
   <MyButton onClick={()=> alert('Aceptaste')} text="Aceptar" color="green"/>
   <MyButton onClick={()=> alert('Cancelaste')} text="Cancelar" color="red"/>
   <MyButton onClick={()=> alert('Restablecite')} text="Restablecer" color="blue"/>
   </>
  )
}

export default App


// Los componentes : Subtitulo→ muestra un text fijo. No recibe props, su contenido es estático y se utiliza como complemento visual de App. Button→ Muestra un botón simple con un alert. Ambos se exportan y se importan desde main.jsx.Esto permite que se muestren fuera de App, porque son independientes.
// 

function Subtitulo() { 

  return(
    <h3 className='slogan'>Un espacio donde las raices cuentan</h3>
  )
}

export  {Subtitulo}




function Button(){
  return(
<button className='button'onClick={()=> alert("Hola!!!")} >Click Aqui</button>
  )
}

export {Button}

