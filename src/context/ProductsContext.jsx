import { createContext, useContext, useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productsService";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadProducts() {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  }

  async function addProduct(product) {
    const newProduct = await createProduct(product);
    setProducts([...products, newProduct]);
  }

  async function editProduct(id, updatedProduct) {
    const productUpdated = await updateProduct(id, updatedProduct);
    setProducts(
      products.map((p) => (p.id === id ? productUpdated : p))
    );
  }

  async function removeProduct(id) {
    await deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        addProduct,
        editProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
