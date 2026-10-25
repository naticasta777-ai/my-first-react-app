import React, { useState } from 'react';

const Ejercicio3 = () => {
    const [edad, setEdad] = useState(0);

    function asignarEdad() {
        setEdad(19);
    }

    return (
        <>
            <button onClick={asignarEdad}>Asignar edad</button>
            <ul>
                <li>Edad: {edad}</li>
            </ul>
        </>
    );
};

export default Ejercicio3;