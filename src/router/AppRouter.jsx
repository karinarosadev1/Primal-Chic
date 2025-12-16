import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import ProductoDetail from "../pages/ProductoDetail";
import CartPage from "../pages/CartPage";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminPage from "../pages/AdminPage";
import CheckoutPage from "../pages/CheckoutPage";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* Productos */}
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/:id" element={<ProductoDetail />} />

            {/* Rutas protegidas */}
            <Route path="/carrito"
                element={<ProtectedRoute>
                    <CartPage />
                </ProtectedRoute>
                }
            />


            <Route path="/checkout"
                element={<CheckoutPage />} />

            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <AdminPage />
                    </ProtectedRoute>
                }
            />


        </Routes>
    );
}

export default AppRouter;
