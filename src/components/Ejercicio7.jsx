import React, { useState } from 'react';

const Ejercicio7 = () => {
    const [colores, setColores] = useState(['rojo', 'verde', 'azul']);

    function quitarVerde() {
        setColores(colores.filter(color => color !== 'verde'));
    }

    function agregarAlInicio() {
        setColores(['negro', ...colores]);
    }

    return (
        <>
            <button onClick={quitarVerde}>Quitar verde</button>
            <button onClick={agregarAlInicio}>Agregar negro al inicio</button>
            <ul>
                {colores.map((color, index) => (
                    <li key={`${color}-${index}`}>{color}</li>
                ))}
            </ul>
        </>
    );
};

export default Ejercicio7;