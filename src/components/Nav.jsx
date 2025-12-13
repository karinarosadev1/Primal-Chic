import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";
import { FaShoppingCart } from "react-icons/fa";

function Nav({ totalItems }) {
  return (
    <nav className="nav-bar">
      <div className="nav-content">

        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li>
            <Link to="/nosotros" className="nav-link">Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </li>
          <li>
            <Link to="/productos" className="nav-link">Tienda</Link>
          </li>
        </ul>

        <Link to="/carrito" className="cart-link">
                <FaShoppingCart className="cart-icon" />
            </Link>
      </div>
    </nav>
  );
}

export default Nav;
