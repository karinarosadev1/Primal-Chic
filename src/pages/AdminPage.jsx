import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../context/ProductsContext";
import AdminProductList from "./AdminProductList";

function AdminPage() {
  const { addProduct } = useProducts();

  const handleCreateProduct = async (producto) => {
    await addProduct(producto);
  };

  return (
    <>
      <Header />

      <main className="admin-page">
        <h1>Administración de Productos</h1>

        {/* Crear producto */}
        <ProductForm onCreate={handleCreateProduct} />

        {/* Listar / Editar / Eliminar */}
        <AdminProductList />
      </main>

      <Footer />
    </>
  );
}

export default AdminPage;
