import React, { useState } from 'react'

const Ejercicio2 = () => {

    const [ciudad, setCiudad] = useState("Manizales");

    //funciones del ejercicio

    function viajarABogota() {
        setCiudad("Bogotá");
    }

    function volverACasa() {
        setCiudad("Manizales");
    }

    return (
        <>
            <button onClick={viajarABogota}>Viajar a Bogotá</button>
            <button onClick={volverACasa}>Volver a casa</button>
            <ul>
                <li>Ciudad actual: {ciudad}</li>
            </ul>
        </>
    );
}

export default Ejercicio2


