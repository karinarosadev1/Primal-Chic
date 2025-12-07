// Componente principal de la app.
import React from 'react'
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Gallery from "./components/Gallery"
import Equipo from "./components/Equipo"
import TarjetaProyecto from "./components/TarjetaProyecto"
import GaleriaIntereses from "./components/GaleriaIntereses"
import Footer from "./components/Footer"



function App() {

  const miembros = [
    { name: 'Silvia', rol: "Product Owner", image: "https://b2472105.smushcdn.com/2472105/wp-content/uploads/2022/12/Foto-Perfil-Profesional-Cristy-Palacios-dic.-02-2022-1024x1024.jpg?lossy=1&strip=1&webp=1" },
    { name: 'Luis', rol: "Product Owner", image: "https://img.freepik.com/foto-gratis/retrato-joven-barbudo-camiseta-azul_176420-28003.jpg" },
    { name: 'Matias', rol: "Product Owner", image: "https://thumbs.dreamstime.com/b/young-handsome-man-dark-shirt-white-background-76534596.jpg?w=576" },
    { name: 'Sabrina', rol: "Product Owner", image: "https://tse1.mm.bing.net/th/id/OIP.vcqlhVtmgR2TKn4gibDLUgHaE7?cb=ucfimg2&ucfimg=1&w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3" },
  ];

  const temas = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Gallery />

      <Equipo miembros={miembros} />

      <TarjetaProyecto
        titulo="Proyecto Chic"
        descripcion="Un Ecommerce realizado con React y mucho estilo" botonTexto="Explorar" />

      <GaleriaIntereses temas={temas} />

      <Footer />
    </>
  )
}

export default App



