import React from "react";
import "../Styles/Cart.css";
import { Link } from "react-router-dom";


function Cart({ carrito, vaciarCarrito }) {
  const total = carrito.reduce(
    (acc, item) => acc + Number(item.precio) * (item.cantidad || 1),
    0
  );


  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>

      {carrito.length === 0 ? (
        <p className="cart-empty">El carrito está vacío</p>
      ) : (
        <>
          <ul className="cart-list">
            {carrito.map((item, index) => (
              <li key={`${item.id}-${index}`} className="cart-item">
                <div>
                  <img
                    className="cart-item-img"
                    src={item.imagen}
                    alt={item.nombre} />
                </div>

                <div>
                  <strong>{item.nombre}</strong>
                  <p>{item.descripcion}</p>
                  <p> {Number(item.precio).toLocaleString("es-AR")}</p>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>
                    Subtotal: $
                    {(Number(item.precio) * item.cantidad).toLocaleString(
                      "es-AR"
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>


          <div className="cart-total">
            <strong>Precio Total: ${total.toLocaleString("es-AR")}</strong>
          </div>

          <Link to="/checkout">
            <button className="btn-checkout">
              Finalizar compra
            </button>
          </Link>


          <button className="btn-vaciar" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
