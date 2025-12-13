import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/");
  }

  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  return (
    <div className="login-page">
      <h1>Iniciar sesión</h1>

      <p>
       Esta accediendo a secciones protegidas
     
      </p>

      <button onClick={handleLogin} className="btn-login">
        Iniciar Sesión
      </button>
    </div>
  );
}

export default Login;
