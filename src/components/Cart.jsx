import React from "react";
import "../Styles/Cart.css";

function Cart({ carrito, vaciarCarrito }) {
  return (
    <aside className="cart">
      <h2>Carrito</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((item, index) => (
            <li key={index}>
              {item.nombre} - ${item.precio}
            </li>
          ))}
        </ul>
      )}

      {carrito.length > 0 && (
        <button className="btn-vaciar" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
      )}
    </aside>
  );
}

export default Cart;
