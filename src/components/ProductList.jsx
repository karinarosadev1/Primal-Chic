import React, { useState } from "react";
import "../Styles/ProductList.css";

function ProductList({ productos, agregarAlCarrito }) {

  return (
    <section className="product-section">
      <h2>Productos disponibles</h2>

      {productos.map((prod) => (
        <ProductCard
          key={prod.id}
          producto={prod}
          agregarAlCarrito={agregarAlCarrito}
        />
      ))}
    </section>
  );
}

function ProductCard({ producto, agregarAlCarrito }) {
  const [cantidad, setCantidad] = useState(1);

  const aumentar = () => setCantidad(cantidad + 1);
  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="product-card">

      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="product-img"
      />

      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>

      {/* Contador */}
      <div className="counter">
        <button className="counter-btn" onClick={disminuir}>−</button>
        <span className="counter-value">{cantidad}</span>
        <button className="counter-btn" onClick={aumentar}>+</button>
      </div>

      <button
        className="btn-add"
        onClick={() => agregarAlCarrito({ ...producto, cantidad })}
      >
        Agregar al carrito
      </button>

    </div>
  );
}

export default ProductList;
