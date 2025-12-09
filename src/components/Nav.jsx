//Menu de navegacion

import React from 'react'
import '../Styles/Nav.css'
import { FaShoppingCart } from "react-icons/fa";

function Nav({ totalItems }) {
  return (
    <nav className='nav-bar'>
      <ul className='nav-list'>
        <li><a href="#" className="nav-link">Inicio</a></li>
        <li><a href="#" className="nav-link">Nosotros</a></li>
        <li><a href="#" className="nav-link">Contactos</a></li>
      </ul>

      {/*icono del carrito*/}
      <div className="cart-container">
        <FaShoppingCart className="cart-icon" />
        <span className="cart-count">{totalItems}</span>
      </div>





    </nav>


  )
}

export default Nav