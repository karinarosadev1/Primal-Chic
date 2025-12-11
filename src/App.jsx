import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import Equipo from "./components/Equipo";
import TarjetaProyecto from "./components/TarjetaProyecto";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Formulario from "./components/Formulario";

function App() {
  const miembros = [
    {
      name: "Silvia",
      rol: "Product Owner",
      image:
        "https://b2472105.smushcdn.com/2472105/wp-content/uploads/2022/12/Foto-Perfil-Profesional-Cristy-Palacios-dic.-02-2022-1024x1024.jpg?lossy=1&strip=1&webp=1",
    },
    {
      name: "Luis",
      rol: "Product Owner",
      image: "https://img.freepik.com/foto-gratis/retrato-joven-barbudo-camiseta-azul_176420-28003.jpg",
    },
    {
      name: "Matias",
      rol: "Product Owner",
      image: "https://thumbs.dreamstime.com/b/young-handsome-man-dark-shirt-white-background-76534596.jpg",
    },
    {
      name: "Sabrina",
      rol: "Product Owner",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.vcqlhVtmgR2TKn4gibDLUgHaE7?cb=ucfimg2&ucfimg=1&w=626&h=417&rs=1",
    },
  ];

  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto, cantidad = 1) {
    setCarrito((prev) => {
      const existe = prev.findIndex((p) => String(p.id) === String(producto.id));

      if (existe !== -1) {
        const nuevo = [...prev];
        nuevo[existe].cantidad += cantidad;
        return nuevo;
      }

      return [
        ...prev,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad,
          imagen: producto.imagen,
        },
      ];
    });
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  return (
    <>
      <Header />
      <Nav />
      <Main />

      <ProductList agregarAlCarrito={agregarAlCarrito} />
      <Cart carrito={carrito} vaciarCarrito={vaciarCarrito} />

      <Gallery />
      <Equipo miembros={miembros} />

      <TarjetaProyecto
        titulo="Proyecto Chic"
        descripcion="Un Ecommerce realizado con React y mucho estilo"
        botonTexto="Explorar"
      />

      <Formulario />
      <Footer />
    </>
  );
}

export default App;
