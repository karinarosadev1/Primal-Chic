//Lista de imagenes

import React from 'react'
import '../Styles/gallery.css'

function Gallery() {
    const images = [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150/0000FF",
        "https://via.placeholder.com/150/FF0000"
    ];



    return (
        <section className='gallery-container'>
            <h2 className="gallery-title">Mas vendidos</h2>
            <div className="gallery-grid">
                <div className="gallery-item">Imagen 1</div>
                <div className="gallery-item">Imagen 2</div>
                <div className="gallery-item">Imagen 3</div>
                <div className="gallery-item">Imagen 4</div>
                <div className="gallery-item">Imagen 5</div>
                <div className="gallery-item">Imagen 6</div>
            </div>
        </section>
    )
}

export default Gallery