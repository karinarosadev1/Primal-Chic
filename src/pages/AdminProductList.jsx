{/* import React, { useState } from "react";
import { useProducts } from "../context/ProductsContext";
import "../Styles/AdminProductList.css";

function AdminProductList() {
    const { products, loading, error, removeProduct, editProduct } = useProducts();

    const [editId, setEditId] = useState(null);
    const [form, setForm] = useState({});

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    const startEdit = (p) => {
        setEditId(p.id);
        setForm(p);
    };

    const handleSave = async () => {
        await editProduct(editId, {
            ...form,
            precio: Number(form.precio),
            stock: Number(form.stock),
        });
        setEditId(null);
    };

    const handleDelete = (id) => {
        if (window.confirm("¿Eliminar producto?")) {
            removeProduct(id);
        }
    };

    return (
        <section className="admin-list">
            <h2>Listado de productos</h2>

            {products.map((p) => {
                return (
                    <div key={p.id} className="admin-product-card">
                        {editId === p.id ? (
                            <div className="edit-form">

                                <input
                                    name="imagen"
                                    value={form.imagen}
                                    onChange={(e) => setForm({ ...form, imagen: e.target.value })}
                                />
                                <input
                                    name="nombre"
                                    value={form.nombre}
                                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                                />
                                <input
                                    name="descripcion"
                                    value={form.descripcion}
                                    onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                                />

                                <input
                                    type="number"
                                    name="precio"
                                    value={form.precio}
                                    onChange={(e) => setForm({ ...form, precio: e.target.value })}
                                />

                                <input
                                    type="number"
                                    name="stock"
                                    value={form.stock}
                                    onChange={(e) => setForm({ ...form, stock: e.target.value })}
                                />
                                <div className="acciones">
                                    <button className="btn-save" onClick={handleSave}>Guardar</button>
                                    <button className="btn-cancel" onClick={() => setEditId(null)}>Cancelar</button>
                                </div>
                            </div>
                        ) : (
                            <div className="product-display">
                                {p.imagen && <img src={p.imagen} alt={p.nombre} className="product-img" />}

                                <div>
                                    <strong>{p.nombre}</strong>
                                    <p>{p.descripcion}</p>
                                    <p>Precio: ${p.precio}</p>
                                    <p>Stock: {p.stock}</p>
                                </div>

                                <div className="acciones">

                                    <button className="btn-edit" onClick={() => startEdit(p)}>Editar</button>
                                    <button className="btn-delete" onClick={() => handleDelete(p.id)}>Eliminar</button>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    );
}


export default AdminProductList;*/}


// src/components/AdminProductList.jsx
import React, { useState } from "react";
import { useProducts } from "../context/ProductsContext";
import "../Styles/AdminProductList.css";

function AdminProductList() {
  const { products, loading, error, removeProduct, editProduct } = useProducts();
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({});

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  const startEdit = (p) => {
    setEditId(p.id);
    setForm(p);
  };

  const handleSave = async () => {
    await editProduct(editId, {
      ...form,
      precio: Number(form.precio),
      stock: Number(form.stock),
    });
    setEditId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Eliminar producto?")) {
      removeProduct(id);
    }
  };

  return (
    <section className="admin-list">
      <h2>Listado de productos</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            if (editId === p.id) {
              return (
                <tr key={p.id}>
                  <td>
                    <input
                      name="imagen"
                      placeholder="URL Imagen"
                      value={form.imagen}
                      onChange={(e) => setForm({ ...form, imagen: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      name="nombre"
                      placeholder="Nombre"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      name="descripcion"
                      placeholder="Descripción"
                      value={form.descripcion}
                      onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="precio"
                      placeholder="Precio"
                      value={form.precio}
                      onChange={(e) => setForm({ ...form, precio: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="stock"
                      placeholder="Stock"
                      value={form.stock}
                      onChange={(e) => setForm({ ...form, stock: e.target.value })}
                    />
                  </td>
                  <td className="acciones">
                    <button className="btn-save" onClick={handleSave}>Guardar</button>
                    <button className="btn-cancel" onClick={() => setEditId(null)}>Cancelar</button>
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={p.id}>
                  <td>
                    {p.imagen && <img src={p.imagen} alt={p.nombre} className="product-img" />}
                  </td>
                  <td>{p.nombre}</td>
                  <td className="descripcion-corta">{p.descripcion}</td>
                  <td>${p.precio}</td>
                  <td>{p.stock}</td>
                  <td className="acciones">
                    <button className="btn-edit" onClick={() => startEdit(p)}>Editar</button>
                    <button className="btn-delete" onClick={() => handleDelete(p.id)}>Eliminar</button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </section>
  );
}

export default AdminProductList;
