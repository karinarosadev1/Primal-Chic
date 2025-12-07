// Componente principal de la app.
import React from 'react'
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import Equipo from "./components/Equipo"
import TarjetaProyecto from "./components/TarjetaProyecto"
import GaleriaIntereses from "./components/GaleriaIntereses"



function App() {
  
const temas = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Gallery />
      <Equipo />
      <TarjetaProyecto titulo="Proyecto Chic" descripcion="Un Ecommerce realizado con React y mucho estilo" botonTexto="Explorar" />
 <GaleriaIntereses temas={temas}/>
      <Footer />
    </>
  )
}

export default App



