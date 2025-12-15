import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import "../Styles/Products.css";





function Products() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // carrito global (Context)
    const { agregarAlCarrito } = useCart();


    useEffect(() => {
        getProducts()
            .then(data => {
                setProductos(data);
                setCargando(false);
            })
            .catch(() => {
                setError("Error al cargar los productos.");
                setCargando(false);
            });
    }, []);


    if (cargando) return <p>Cargando productos…</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Header />
            <Nav />

            <div className="products-page">
                <h1>Productos</h1>
                <div className="products-grid">
                    {productos.map(producto => (
                        <ProductCard
                            key={producto.id}
                            producto={producto}
                            onAddCart={agregarAlCarrito}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Products;
