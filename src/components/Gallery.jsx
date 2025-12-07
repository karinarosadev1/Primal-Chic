//Lista de imagenes

import React from 'react'
import '../Styles/gallery.css'

function Gallery() {
    const images = [
    
        "https://imgs.search.brave.com/OwAu78EVx6QH80DtUYZQbYWTKGSBxzjfmVfoFNRdzTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3ZlamFib2hlbWlh/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNi92ZXN0/aWRvLWJvaG8tbGFy/Z28tdHVycXVlc2Et/bmFyYW5qYS5qcGc",
        "https://imgs.search.brave.com/iE3-ispkvya9g-gYZPRBPmGWyNEQ2_lbUss3kGa1D-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzcyNzY4Mi92/ZXN0aWRvX2N1cnRv/X2JvaG9faGlwcGll/X2NydV9tYW5nYV9z/aW5vXzY2NjRfMV9j/MTE0NjJmMjA5ODE0/OGQwNDQwZTBlZjMz/MmYzMmViMC5qcGc"
    ];



return (
  <section className="gallery-section">
    <h2 className="gallery-title">Más vendidos</h2>
<div className="gallery-container">
    {images.map((src, i) => (
      <img className="gallery-image"
        key={i}               // id requerido: la posición
        src={src}             // url de la imagen del array
        alt={`imagen ${i+1}`}  // texto cuando falta la image
      />
    ))}
    </div>
  </section>
);

}
export default Gallery