import React from "react";
import { useCart } from "../context/CartContext";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CartPage() {
  const { carrito, vaciarCarrito } = useCart();

  return (
    <>
      <Header />

      <Cart carrito={carrito} vaciarCarrito={vaciarCarrito} />

      <Footer />
    </>
  );
}

export default CartPage;
