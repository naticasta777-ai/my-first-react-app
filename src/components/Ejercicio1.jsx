import React, { useState } from 'react';

const Ejercicio1 = () => {
    const [nombre, setNombre] = useState('');

    function cambiarNombre() {
        setNombre('Yaneth');
    }

    return (
        <>
            <button onClick={cambiarNombre}>Cambiar nombre</button>
            <ul>
                <li>Nombre: {nombre}</li>
            </ul>
        </>
    );
};

export default Ejercicio1;