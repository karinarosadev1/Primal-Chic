
import React from 'react'
import App from "./App.jsx";

function ListaProductos({productos}) {
  return (
    <>
    <h2>Indumentaria</h2>
    <ol>
      {/*parametros del elemento e indice*/}
     { productos.map((producto, i) => (<li key={i}>{producto}</li>))}
    </ol>
    </>
  )
}

export default ListaProductos