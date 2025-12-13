import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productsService";

function ProductoDetail() {
    const { id } = useParams();

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

    return (
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

                    {/* Botón futuro para carrito (clase 7/8) */}
                    <button className="btn-agregar">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductoDetail;
