import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
          <AuthProvider>
        <CartProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </CartProvider>
        </AuthProvider>
    );
}

export default App;
