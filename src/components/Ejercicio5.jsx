import React, { useState } from 'react';

const Ejercicio5 = () => {
    const [precio, setPrecio] = useState(50000);

    function aplicarDescuento() {
        setPrecio(precio * 0.9);
    }

    return (
        <>
            <button onClick={aplicarDescuento}>Aplicar descuento</button>
            <ul>
                <li>Precio actual: ${precio}</li>
            </ul>
        </>
    );
};

export default Ejercicio5;