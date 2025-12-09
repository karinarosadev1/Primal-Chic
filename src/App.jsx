
// Componente principal de la app.
import React from 'react'
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Gallery from "./components/Gallery"
import Equipo from "./components/Equipo"
import TarjetaProyecto from "./components/TarjetaProyecto"
import Footer from "./components/Footer"
import { useState } from 'react'
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";



function App() {

  //nosotros- miembros del equipo
  const miembros = [
    { name: 'Silvia', rol: "Product Owner", image: "https://b2472105.smushcdn.com/2472105/wp-content/uploads/2022/12/Foto-Perfil-Profesional-Cristy-Palacios-dic.-02-2022-1024x1024.jpg?lossy=1&strip=1&webp=1" },
    { name: 'Luis', rol: "Product Owner", image: "https://img.freepik.com/foto-gratis/retrato-joven-barbudo-camiseta-azul_176420-28003.jpg" },
    { name: 'Matias', rol: "Product Owner", image: "https://thumbs.dreamstime.com/b/young-handsome-man-dark-shirt-white-background-76534596.jpg?w=576" },
    { name: 'Sabrina', rol: "Product Owner", image: "https://tse1.mm.bing.net/th/id/OIP.vcqlhVtmgR2TKn4gibDLUgHaE7?cb=ucfimg2&ucfimg=1&w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3" },
  ];

//carrito
   const [carrito, setCarrito] = useState([]);

 
  const productos = [
  {
    id: 1,
    nombre: "Vestido Candelaria",
    precio: 115000,
    imagen: "https://www.ovejabohemia.com/wp-content/uploads/2021/12/vestido-boho-genova-verde3.jpg"
  },
  {
    id: 2,
    nombre: "Vestido Bruma",
    precio: 90000,
    imagen: "https://www.ovejabohemia.com/wp-content/uploads/2022/01/vestido-boho-paula-azul5.jpg"
  },
    {
    id: 3,
    nombre: "Pantalon Scarlet",
    precio: 135000,
    imagen: "https://imgs.search.brave.com/NYCNvVLgp_QmaftI_x7Fb7zWvqJkNgqiOt6SbfNhP24/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9rYWxl/eGEuZXMvMTA4NzYt/aG9tZV9kZWZhdWx0/L3BhbnRhbG9uLWJv/aG8tbW9udC5qcGc"
  }
];

   function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto]);
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  return (
    <>
      <Header />
      <Nav />
      <Main />
       <ProductList productos={productos} agregarAlCarrito={agregarAlCarrito} />
        <Cart carrito={carrito} vaciarCarrito={vaciarCarrito} />
     
      <Gallery />

      <Equipo miembros={miembros} />

      <TarjetaProyecto
        titulo="Proyecto Chic"
        descripcion="Un Ecommerce realizado con React y mucho estilo" botonTexto="Explorar" />

      <Footer />
    </>
  )
}

export default App



