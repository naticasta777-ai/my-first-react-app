import React, { useState } from 'react'

const Ejercicio6 = () => {
    const [frutas, setFrutas] = useState([]);

    function agregarFruta() {
        setFrutas([...frutas, "mango"]);
    }

    return (
        <>
            <button onClick={agregarFruta}>Agregar fruta</button>
            <ul>
                {frutas.map((fruta, index) => (
                    <li key={index}>{fruta}</li>
                ))}
            </ul>
        </>
    );
}

export default Ejercicio6