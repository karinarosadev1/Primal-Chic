import React, { useEffect, useState } from "react";
import "../Styles/ProductList.css";

function ProductList({ agregarAlCarrito }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const URL = "https://693a1dffc8d59937aa09daac.mockapi.io/api/productos";

  // Cantidades por producto (id string)
  const [cantidades, setCantidades] = useState({});

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);

        // inicializa un contador por id
        const inicial = {};
        data.forEach((p) => {
          inicial[String(p.id)] = 0;
        });

        setCantidades(inicial);
        setCargando(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los productos.");
        setCargando(false);
      });
  }, []);

  function incrementar(id) {
    const pid = String(id);
    setCantidades((prev) => ({
      ...prev,
      [pid]: prev[pid] + 1,
    }));
  }

  function disminuir(id) {
    const pid = String(id);
    setCantidades((prev) => ({
      ...prev,
      [pid]: prev[pid] > 0 ? prev[pid] - 1 : 0,
    }));
  }

  if (cargando) return <p>Cargando productos…</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="product-list">
      <h2>Productos</h2>

      <div className="productos-grid">
        {productos.map((producto) => {
          const pid = String(producto.id);
          const qty = cantidades[pid];
          const nombre = producto.name;
          const imagen = producto.imagen;
          const descripcion = producto.descripcion;
           const precio = producto.precio;

          return (
            <div key={pid} className="producto-card">
              <img src={imagen} alt={nombre} />

              <h3>{nombre}</h3>
              <p className="descripcion">{descripcion}</p>
               <p className="descripcion">$ {precio}</p>

              {/* CONTADOR SIMPLE */}
              <div className="counter">
                <button
                  className="counter-btn"
                  onClick={() => disminuir(pid)}
                >
                  –
                </button>

                <div className="counter-value">{qty}</div>

                <button
                  className="counter-btn"
                  onClick={() => incrementar(pid)}
                >
                  +
                </button>
              </div>

              <button
                className="btn-agregar"
                disabled={qty === 0}
                onClick={() =>
                  agregarAlCarrito({
                    id: pid,
                    nombre,
                    descripcion,
                    precio,
                    imagen,
                    cantidad: qty
                  })
                }
              >
                {qty === 0 ? "Elegí cantidad" : "Agregar al carrito"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
