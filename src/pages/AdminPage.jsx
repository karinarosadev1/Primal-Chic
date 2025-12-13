import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AdminPage() {
  return (
    <>
      <Header />

      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1>Panel de Administración</h1>

        <p>
          Esta sección está protegida y solo es accesible para usuarios
          autenticados.
        </p>

        <p>
         A futuro se podrán gestionar productos,
          pedidos y usuarios.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default AdminPage;
