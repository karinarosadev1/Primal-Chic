import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";




function Products() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // Simula carrito
    const [carrito, setCarrito] = useState([]);

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

    const agregarCarrito = (producto, cantidad) => {
        setCarrito(prev => [...prev, { ...producto, cantidad }]);
        alert(`${cantidad} ${producto.nombre} agregado al carrito`);
    };

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
                            onAddCart={agregarCarrito}
                        />
                    ))}
                </div>
            </div>

             <Footer />
            </>
            );
}

            export default Products;
