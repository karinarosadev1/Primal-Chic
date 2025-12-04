// Este archivo define el componente principal de la aplicación.
// Renderiza títulos y varios botones personalizados utilizando el componente MyButton.
// También exporta componentes secundarios (Subtitulo y Button) para que puedan 
// ser usados desde main.jsx. Desde aquí se envían las props (text, color, onClick) 
// hacia MyButton, que las utiliza para crear botones dinámicos.

import './App.css'
import './index.css'
import MyButton from './MyButton.jsx'
import ListaProductos from './ListaProductos.jsx'
import Tarjeta from './Tarjeta.jsx'



//El spread operator ... pasa cada propiedad del objeto como prop separada. Aquí usamos spread operator para pasar titulo, descripcion y botonTexto como props en Tarjeta. 



function App() {

  const productos = ["Camisa", "Pantalón", "Botas", "Cinturón"];
  const TarjetaDatos = {
    titulo: "Oferta especial",
    descripcion: "20% de descuento en todos los productos",
    botonTexto: "Ver más"
  }

  return (
    <>
      <h1 className='greeting'>Bienvenido a Primal Chic</h1>
      <h2 className='greeting'>Arte Nativo</h2>
      <Subtitulo />
      <ListaProductos productos={productos} />
      <Button/>
      <MyButton onClick={() => alert('Aceptaste')} text="Aceptar" color="green" />
      <MyButton onClick={() => alert('Cancelaste')} text="Cancelar" color="red" />
      <MyButton onClick={() => alert('Restableciste')} text="Restablecer" color="blue" />
     
       <Tarjeta {...TarjetaDatos} />
    </>
  )
}

export default App


//componente Subtitulo→ No recibe props, su contenido es estático y se utiliza como complemento visual de App. Button→ Muestra un botón simple con un alert. Ambos se exportan y se importan desde main.jsx.Esto permite que se muestren fuera de App, porque son independientes.
// 

function Subtitulo() {

  return (
    <h3 className='slogan'>Un espacio donde las raices cuentan</h3>
  )
}

export { Subtitulo }




function Button() {
  return (
    <button className='button' onClick={() => alert("Hola!!!")} >Click Aqui</button>
  )
}

export { Button }

