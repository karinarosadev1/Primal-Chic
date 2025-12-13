import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Gallery from "../components/Gallery";
import TarjetaProyecto from "../components/TarjetaProyecto";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ProductCarousel from "../components/ProductCarousel";
import { getProducts } from "../services/productsService";


function Home() {
 
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
            setProductos(data);
        });
    }, []);

    return (
        <>
            <Header />
              <Nav />
            <Main />
            <Gallery />

            {/* Carrusel solo si hay productos */}
            {productos.length > 4 && (
                <ProductCarousel productos={productos} />
            )}

            <TarjetaProyecto
                titulo="Proyecto Chic"
                descripcion="Un Ecommerce realizado con React y mucho estilo"
                botonTexto="Explorar"
            />

            <Footer />
        </>
    );
}

export default Home;
