// src/components/ProductCard.jsx
import React from "react";
import "../Styles/ProductCard.css";
import { useState } from "react";


function ProductCard({ producto, onAddCart }) {

    const [cantidad, setCantidad] = useState(1);

    // Maneja agregar al carrito
    const handleAdd = (e) => {
        e.preventDefault(); // evita que el Link de Products navegue
         if (cantidad < 1) return;

    onAddCart(producto, cantidad);
    setCantidad(1); // reset
  };


    return (
        <div className="producto-card">

            <img
                src={producto.imagen}
                alt={producto.nombre}
                className="producto-img"
            />

            <h3>{producto.nombre}</h3>

            <p className="descripcion">{producto.descripcion}</p>

            <p className="precio">${Number(producto.precio).toLocaleString("es-AR")}</p>


            {/* Contador */}
            <div className="contador">
                 <button onClick={() => setCantidad(c => Math.max(1, c - 1))}>-</button>

                <span>{cantidad}</span>
                 <button onClick={() => setCantidad((c) => c + 1)}>+</button>
            </div>

            {/* Botón agregar al carrito */}
            <button className="btn-agregar" onClick={handleAdd}>
                Agregar al carrito
            </button>

        </div>
    );
}

export default ProductCard;
