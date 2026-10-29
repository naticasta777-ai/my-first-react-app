import React, { useState } from 'react'

const Ejercicio8 = () => {
    const [estudiante, setEstudiante] = useState({ nombre: "", semestre: 0 });

    function llenarDatos() {
        setEstudiante({ nombre: "Natalia", semestre: 5 });
    }

    return (
        <>
            <button onClick={llenarDatos}>Llenar datos</button>
            <ul>
                <li>Nombre: {estudiante.nombre}</li>
                <li>Semestre: {estudiante.semestre}</li>
            </ul>
        </>
    );
}

export default Ejercicio8