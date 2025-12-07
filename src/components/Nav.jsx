//Menu de navegacion

import React from 'react'
import '../Styles/Nav.css'

function Nav() {
  return (
<nav className='nav'>
    <ul className='nav-list'>
        <li><a href="#" className="nav-link">Inicio</a></li>
        <li><a href="#" className="nav-link">Nosotros</a></li>
        <li><a href="#" className="nav-link">Contactos</a></li>
    </ul>
</nav>


  )
}

export default Nav