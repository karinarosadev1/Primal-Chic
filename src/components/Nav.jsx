import React from 'react'
import '../Styles/Nav.css'
import { FaShoppingCart } from "react-icons/fa";

function Nav({ totalItems }) {
  return (
    <nav className='nav-bar'>
      <div className="nav-content">

        <ul className='nav-list'>
          <li><a href="#" className="nav-link">Inicio</a></li>
          <li><a href="#" className="nav-link">Nosotros</a></li>
          <li><a href="#" className="nav-link">Contactos</a></li>
        </ul>

        <FaShoppingCart className="cart-icon" />


      </div>
    </nav>
  )
}

export default Nav
