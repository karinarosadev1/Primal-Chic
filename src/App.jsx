import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
    return (
        <AuthProvider>
            <ProductsProvider>
                <CartProvider >
                    <BrowserRouter>
                        <AppRouter />
                    </BrowserRouter>
                </CartProvider >
            </ProductsProvider>
        </AuthProvider >
    );
}

export default App;
