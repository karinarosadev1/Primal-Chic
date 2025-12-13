import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Nav() {
  const { totalItems } = useCart();
  const { isAuthenticated, login, logout } = useAuth();
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
          <li><Link to="/admin" className="nav-link">Admin</Link></li>
        </ul>


        <div className="nav-actions">
          <Link to="/carrito" className="cart-link">
            <FaShoppingCart className="cart-icon" />
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </Link>

          {isAuthenticated ? (
            <button onClick={logout}>Cerrar sesión</button>
          ) : (
            <button onClick={login}>Iniciar sesión</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
