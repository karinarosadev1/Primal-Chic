import React, { useState } from "react";
import "../Styles/Formulario.css";

function Formulario() {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        asunto: "",
        mensaje: "",
    });

    const [errores, setErrores] = useState({});

    function manejarCambio(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setErrores({
            ...errores,
            [name]: "",
        });
    }

    function validarFormulario() {
        let nuevosErrores = {};

        if (!formData.nombre.trim()) {
            nuevosErrores.nombre = "Nombre requerido";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.correo.trim()) {
            nuevosErrores.correo = "Correo requerido";
        } else if (!emailRegex.test(formData.correo)) {
            nuevosErrores.correo = "Formato inválido";
        }

        if (!formData.asunto.trim()) {
            nuevosErrores.asunto = "Seleccione un asunto";
        }

        if (!formData.mensaje.trim()) {
            nuevosErrores.mensaje = "Mensaje requerido";
        } else if (formData.mensaje.length < 10) {
            nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres";
        }

        return nuevosErrores;
    }

    function manejarEnvio(e) {
        e.preventDefault();

        const erroresDetectados = validarFormulario();

        if (Object.keys(erroresDetectados).length > 0) {
            setErrores(erroresDetectados);
            return;
        }

        console.log(formData);
        alert("Formulario enviado correctamente ✔");


        setFormData({
            nombre: "",
            correo: "",
            telefono: "",
            asunto: "",
            mensaje: "",
        });

        setErrores({});
    }

    return (
        <>
            <div className="formulario-wrapper">
                <h1>Formulario de Contacto</h1>

                <form onSubmit={manejarEnvio} className="formulario">
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={manejarCambio}
                        placeholder="Ingresá tu nombre completo"
                    />
                    {errores.nombre && <p className="error">{errores.nombre}</p>}

                    <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={manejarCambio}
                        placeholder="Ingresá tu correo electrónico"
                    />
                    {errores.correo && <p className="error">{errores.correo}</p>}

                    <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={manejarCambio}
                        placeholder="Ingresá tu teléfono (opcional)"
                    />

                    <select name="asunto" value={formData.asunto} onChange={manejarCambio}>
                        <option value="">Seleccioná un asunto</option>
                        <option value="consulta">Consulta sobre un producto</option>
                        <option value="compra">Problema con mi compra</option>
                        <option value="garantia">Garantía y reparaciones</option>
                        <option value="envios">Información sobre envíos</option>
                        <option value="otro">Otro</option>
                    </select>
                    {errores.asunto && <p className="error">{errores.asunto}</p>}

                    <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={manejarCambio}
                        placeholder="Escribí tu mensaje..."
                        rows="4"
                    />
                    {errores.mensaje && <p className="error">{errores.mensaje}</p>}

                    <button type="submit">Enviar mensaje</button>
                </form>
            </div>
        </>
    );
}

export default Formulario;
