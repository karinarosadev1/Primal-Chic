
import React from "react";
import { useCart } from "../context/CartContext";
import "../Styles/Checkout.css";

function Checkout() {
  const { carrito, vaciarCarrito } = useCart();

  const total = carrito.reduce(
    (acc, item) => acc + Number(item.precio) * item.cantidad,
    0
  );

  const handleCheckout = () => {
    alert("✅ Compra realizada con éxito. ¡Gracias por tu compra!");
    vaciarCarrito();
  };

  if (carrito.length === 0) {
    return (
      <div className="checkout-container">
        <h2>Gracias por confiar en PrimalChic.</h2>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar compra</h2>

      <ul className="checkout-list">
        {carrito.map((item, index) => (
          <li key={`${item.id}-${index}`}>
            {item.nombre} x {item.cantidad} — $
            {(item.precio * item.cantidad).toLocaleString("es-AR")}
          </li>
        ))}
      </ul>

      <h3>Total a pagar: ${total.toLocaleString("es-AR")}</h3>

      <button className="btn-checkout" onClick={handleCheckout}>
        Confirmar compra
      </button>
    </div>
  );
}

export default Checkout;
