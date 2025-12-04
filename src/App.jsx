// Componente principal de la app.


import './App.css'
import './index.css'
import MyButton from './MyButton.jsx'
import ListaProductos from './ListaProductos.jsx'
import Tarjeta from './Tarjeta.jsx'


//Se reemplazo el spread operator y se agregaron las tarjetas 

//Se puede pasar directamente el array sin usar la contante xq en React podés pasar cualquier valor como prop, incluso un array literal directamente, aunque esto es menos escalable <ListaProductos productos={['Camisa', 'Pantalón', 'Botas', 'Cinturón']} />
function App() {

  const productos = ["Camisa", "Pantalón", "Botas", "Cinturón"];


  return (
    <>
      <h1 className='greeting'>Bienvenido a Primal Chic</h1>
      <h2 className='greeting'>Arte Nativo</h2>
      <Subtitulo />
      <ListaProductos productos={productos} />
      <hr />
      <h2>Promociones</h2>
      <div>
        <Tarjeta
          titulo="Oferta especial"
          descripcion="20% de descuento en todos los productos"
          botonTexto="Ver más" onClick={()=> alert("Veo Mas")}
        />
        
        <Tarjeta
          titulo="Nuevo lanzamiento"
          descripcion="Colección primavera-verano disponible"
          botonTexto="Descubrir" onClick={()=> alert("Estoy descubriendo")}
        />
        <Tarjeta
          titulo="Promoción limitada"
          descripcion="Envío gratis por 3 días"
          botonTexto="Aprovechar" onClick={()=> alert("Estoy aprovechando")}
        />
      </div>

      <hr />

      <h2>Botones personalizados</h2>
      <MyButton onClick={() => alert('Aceptaste')} text="Aceptar" color="green" />
      <MyButton onClick={() => alert('Cancelaste')} text="Cancelar" color="red" />
      <MyButton onClick={() => alert('Restableciste')} text="Restablecer" color="blue" />

    </>
  )
}

export default App


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

