import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productsService";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";



function ProductoDetail() {
    const { id } = useParams();
    const { agregarAlCarrito } = useCart();

    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setProducto(data);
                setCargando(false);
            })
            .catch(() => {
                setError("No se encontró el producto.");
                setCargando(false);
            });
    }, [id]);

    if (cargando) return <p>Cargando producto…</p>;
    if (error) return <p>{error}</p>;
    if (!producto) return null;

    const handleAdd = () => {
        agregarAlCarrito(producto, cantidad);
    };

    return (

        <>
            <Header />
            <div className="product-detail-page">
                <h1>{producto.name}</h1>

                <div className="product-detail">
                    <img
                        src={producto.imagen}
                        alt={producto.name}
                        className="detail-img"
                    />

                    <div className="detail-info">
                        <p className="descripcion">{producto.descripcion}</p>

                        <p className="precio">
                            ${Number(producto.precio).toLocaleString("es-AR")}
                        </p>

                        <div className="contador">
                            <button onClick={() => setCantidad(c => Math.max(1, c - 1))}>
                                -
                            </button>
                            <span>{cantidad}</span>
                            <button onClick={() => setCantidad(c => c + 1)}>
                                +
                            </button>
                        </div>



                        <button className="btn-agregar" onClick={handleAdd}>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductoDetail;
