import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductForm from "../components/ProductForm";
import { createProduct } from "../services/productsService";

function AdminPage() {

  const handleCreateProduct = async (producto) => {
    await createProduct(producto);
  };


  return (
    <>
      <Header />

          <main className="admin-page">
        <ProductForm onCreate={handleCreateProduct} />
      </main>

      <Footer />
    </>
  );
}

export default AdminPage;
