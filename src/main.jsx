// Este archivo es el punto de entrada de la aplicación React. 
// Busca el elemento #root del HTML y renderiza dentro de él los componentes principales.
// Importa App, Subtitulo y Button para mostrarlos en pantalla, iniciando así toda la interfaz.


import { createRoot } from 'react-dom/client'
import './index.css'
//Importa los componentes desde otros archivos
import App from './App.jsx'
import { StrictMode } from 'react'

//Renderiza tus componentes dentro de ese root
createRoot(document.getElementById('root')).render(
    <>
        <StrictMode>
            <App />
        </StrictMode>


    </>
)

