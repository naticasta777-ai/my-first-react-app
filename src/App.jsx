import { useTextos } from "./hooks/useTextos.js";
import Navbar from "./components/Navbar";
import './App.css'
import { useEffect, useState } from "react";

import Ejercicio2 from "./components/Ejercicio2.jsx";
import Ejercicio4 from "./components/Ejercicio4.jsx";
import Ejercicio6 from "./components/Ejercicio6.jsx";
import Ejercicio10 from "./components/Ejercicio10.jsx";
import Ejercicio8 from "./components/Ejercicio8.jsx";

function leerSeccion() {
    return window.location.hash.slice(1) || "inicio";
}

function App() {
    // Idioma por defecto español
    const [idioma, setIdioma] = useState("es");
    const [activo, setActivo] = useState(leerSeccion);
    const [consulta, setConsulta] = useState("");
    const [textoGrande, setTextoGrande] = useState(false);
    const datos = useTextos(idioma);
    console.log(datos);

    const ingles = idioma === "en";
    const titulo = activo === "favoritos" ? datos.textos?.navbar.botones.favoritos : datos.textos?.navbar.enlaces[activo];

    // Va a sincronizar el estado el componente con el hash de la url
    useEffect(() => {
        function actualizar() {
            setActivo(leerSeccion());
            setConsulta("");
        }
        window.addEventListener("hashchange", actualizar);
        return () => window.removeEventListener("hashchange", actualizar);
    }, []);


    useEffect(() => {
        document.documentElement.lang;
    }, [idioma]);

    useEffect(() => {
        document.documentElement.style.fontSize = textoGrande ? "112%" : "";
        return () => {
            document.documentElement.style.fontSize = "";
        };
    }, [textoGrande]);

    function buscar(valor) {
        setConsulta(valor);
        setActivo("heroes");
        // window.history es el que da acceso al historial de la pestaña
        window.history.replaceState(null, "", "#heores");
    }

    return (
        /*     <>        
                <Navbar 
                    {...datos} 
                    idioma={idioma}
                    cambiarIdioma={setIdioma}
                    activo={activo}
                    onBuscar={buscar}
                    texto={textoGrande}
                    alternarTexto={() => setTextoGrande((valor) => !valor)}
                />
            </>
      */


        <>
        <Ejercicio10 />
        <Ejercicio2 />
        <Ejercicio4 />
        <Ejercicio6 />
        <Ejercicio8 />
        </>

    );
}

export default App;