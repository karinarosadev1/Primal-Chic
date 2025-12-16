import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import "../Styles/Products.css";

const ITEMS_PER_PAGE = 6;


function Products() {
    const [productos, setProductos] = useState([]);
    const [search, setSearch] = useState("");
    const [categoria, setCategoria] = useState("Todos");
    const [page, setPage] = useState(1);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // carrito global (Context)
    const { agregarAlCarrito } = useCart();


    useEffect(() => {
        getProducts()
            .then(data => {
                setProductos(data);
                setCargando(false);
            })
            .catch(() => {
                setError("Error al cargar los productos.");
                setCargando(false);
            });
    }, []);


    // FILTRO + BÚSQUEDA
    const productosFiltrados = productos.filter(p => {
        const coincideBusqueda =
            p.nombre.toLowerCase().includes(search.toLowerCase());

        const coincideCategoria =
            categoria === "Todos" || p.categoria === categoria;

        return coincideBusqueda && coincideCategoria;
    });

    // PAGINACIÓN
    const totalPages = Math.ceil(productosFiltrados.length / ITEMS_PER_PAGE);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const visibles = productosFiltrados.slice(start, start + ITEMS_PER_PAGE);


    if (cargando) return <p>Cargando productos…</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Header />
            <Nav />

            <div className="products-page">
                <h1>Productos</h1>

                {/* BUSCADOR */}
                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    className="search-input"
                />

                {/* FILTRO POR CATEGORÍA */}
                <div className="filters">
                    {["Todos", "Blusas", "Calzado", "Pantalones", "Vestidos", "Accesorios"].map(cat => (
                        <button
                            key={cat}
                            className={categoria === cat ? "active" : ""}
                            onClick={() => {
                                setCategoria(cat);
                                setPage(1);
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                {/* PRODUCTOS */}

                <div className="products-grid">
                    {visibles.map(producto => (
                        <ProductCard
                            key={producto.id}
                            producto={producto}
                            onAddCart={agregarAlCarrito}
                        />
                    ))}
                </div>

                {/* PAGINADOR */}
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={page === i + 1 ? "active" : ""}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

            </div>

            <Footer />
        </>
    );
}

export default Products;
