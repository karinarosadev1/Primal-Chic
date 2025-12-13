import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import ProductoDetail from "../pages/ProductoDetail";
import CartPage from "../pages/CartPage";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />

            {/* Productos */}
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/:id" element={<ProductoDetail />} />
            <Route path="/carrito" element={<CartPage />} />

        </Routes>
    );
}

export default AppRouter;
