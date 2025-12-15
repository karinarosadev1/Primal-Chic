import React, { useState } from "react";
import "../Styles/ProductForm.css";

function ProductForm({ onCreate }) {
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        imagen: "",
        categoria: "",
        stock: ""
    });

    const [errores, setErrores] = useState({});
    const [mensaje, setMensaje] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const validar = () => {
        const nuevosErrores = {};

        if (!form.nombre.trim()) {
            nuevosErrores.nombre = "El nombre es obligatorio";
        }

        if (!form.precio || form.precio <= 0) {
            nuevosErrores.precio = "El precio debe ser mayor a 0";
        }

        if (!form.descripcion || form.descripcion.length < 10) {
            nuevosErrores.descripcion =
                "La descripción debe tener al menos 10 caracteres";
        }

        if (!form.imagen.trim()) {
            nuevosErrores.imagen = "La imagen es obligatoria";
        }

        if (!form.categoria.trim()) {
            nuevosErrores.categoria = "La categoría es obligatoria";
        }

        if (form.stock === "" || Number(form.stock) < 0) {
            nuevosErrores.stock = "El stock debe ser 0 o mayor";
        }


        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje("");

        if (!validar()) return;

        try {
            await onCreate({
                ...form,
                precio: Number(form.precio),
                stock: Number(form.stock)
            });

            setMensaje("Producto agregado correctamente");

            setForm({
                nombre: "",
                descripcion: "",
                precio: "",
                imagen: "",
                categoria: "",
                stock: ""
            });
        } catch (error) {
            setMensaje("Error al agregar el producto");
        }
    };

    return (

        <section className="product-form">
            <h2>AGREGAR PRODUCTO</h2>

            <form className="product-form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={handleChange}
                />
                {errores.nombre && <span>{errores.nombre}</span>}


                <textarea
                    name="descripcion"
                    placeholder="Descripción"
                    value={form.descripcion}
                    onChange={handleChange}
                />
                {errores.descripcion && <span>{errores.descripcion}</span>}


                <input
                    type="number"
                    name="precio"
                    placeholder="Precio"
                    value={form.precio}
                    onChange={handleChange}
                />
                {errores.precio && <span>{errores.precio}</span>}


                <input
                    type="text"
                    name="imagen"
                    placeholder="URL de la imagen"
                    value={form.imagen}
                    onChange={handleChange}
                />
                {errores.imagen && <span>{errores.imagen}</span>}

                
                <select
                    name="categoria"
                    value={form.categoria}
                    onChange={handleChange}
                >
                    <option value="Blusas">Blusas</option>
                    <option value="Calzado">Calzados</option>
                    <option value="Pantalones">Pantalones</option>
                    <option value="Vestidos">Vestidos</option>
                    <option value="Accesorios">Accesorios</option>
                </select>
                {errores.categoria && <span>{errores.categoria}</span>}

                <button type="submit">CREAR PRODUCTO</button>

                {mensaje && <p className="form-msg">{mensaje}</p>}
            </form>
        </section>
    );
}

export default ProductForm;
