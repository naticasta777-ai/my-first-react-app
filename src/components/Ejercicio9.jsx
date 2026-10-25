import React, { useState } from 'react';

const Ejercicio9 = () => {
    const [producto, setProducto] = useState({
        nombre: 'Café de Caldas',
        precio: 12000,
        disponible: true
    });

    function subirPrecio() {
        setProducto({
            ...producto,
            precio: producto.precio + 1000
        });
    }

    function agotar() {
        setProducto({
            ...producto,
            disponible: false
        });
    }

    return (
        <>
            <button onClick={subirPrecio}>Subir precio</button>
            <button onClick={agotar}>Agotar producto</button>
            <ul>
                <li>Producto: {producto.nombre}</li>
                <li>Precio: ${producto.precio}</li>
                <li>Disponible: {producto.disponible ? 'Sí' : 'No'}</li>
            </ul>
        </>
    );
};

export default Ejercicio9;