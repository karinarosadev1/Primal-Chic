import React from "react";
import "../Styles/Cart.css";

function Cart({ carrito, vaciarCarrito }) {
  //const total = carrito.length;
  // Total general
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
            {carrito.map((item) => (
              <li key={item.id} className="cart-item">

                <div>
                  <img
                    className="cart-item-img"
                    src={item.imagen}
                    alt={item.nombre} />
                </div>


                <div>
                  <strong>{item.nombre}</strong>
                  <p>{item.descripcion}</p>
                   <p>{item.precio}</p>
                </div>               
              </li>
            ))}
          </ul>
<div>
  <strong>Precio Total: ${total}</strong>
</div>
          <button className="btn-vaciar" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
