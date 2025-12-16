import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/ProductCarousel.css";
import ProductCard from "./ProductCard";

function ProductCarousel({ productos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3; // cantidad de items visibles a la vez

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? productos.length - visibleItems : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === productos.length - visibleItems ? 0 : prev + 1
    );
  };

  //  Evita errores si productos todavía no cargó
  if (!productos || productos.length === 0) return null;


  return (
    <div className="carousel-container">
      <h2>Ver mas en tienda</h2>
      <div className="carousel-wrapper">
        <button className="carousel-control prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-track">
          {productos
            .slice(currentIndex, currentIndex + visibleItems)
            .map((prod, index) => (

              <Link key={`${prod.id}-${index}`}
                to={`/productos/${prod.id}`}
                className="carousel-item">
                  
                <ProductCard producto={prod} />
              </Link>
            ))}
        </div>



        <button className="carousel-control next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default ProductCarousel;
