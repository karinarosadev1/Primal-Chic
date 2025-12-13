import { createContext, useContext, useState } from "react";

// 1) Crear contexto
const CartContext = createContext();

// 2) Proveedor del carrito
export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto, cantidad = 1) {
    setCarrito((prev) => {
      const existe = prev.find((p) => String(p.id) === String(producto.id));

      if (existe) {
        return prev.map((p) =>
          String(p.id) === String(producto.id)
            ? { ...p, cantidad: p.cantidad + cantidad }
            : p
        );
      }

      return [
        ...prev,
        { ...producto, cantidad }
      ];
    });
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ carrito, agregarAlCarrito, vaciarCarrito, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 3) Hook para usar el contexto
export function useCart() {
  return useContext(CartContext);
}
