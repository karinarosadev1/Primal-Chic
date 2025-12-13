import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";

function Contact() {
    return (
        <>
            <Header />
            <Nav />

            <div className="contact-container">
                <h1>Contacto</h1>

                <p className="contact-text">
                    Si tenés dudas sobre un producto, tu compra, envíos o cualquier
                    consulta, completá el formulario y te responderemos a la brevedad.
                </p>

                <Formulario />
            </div>

            <Footer />



        </>

    );
}

export default Contact;
