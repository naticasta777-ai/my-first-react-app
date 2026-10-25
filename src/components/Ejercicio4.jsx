import React, { useState } from 'react'

const Ejercicio4 = () => {
    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1);
    }

    function disminuir() {
        setContador(contador - 1);
    }

    function reiniciar() {
        setContador(0);
    }

    return (
        <>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={disminuir}>Disminuir</button>
            <button onClick={reiniciar}>Reiniciar</button>
            <ul>
                <li>Contador: {contador}</li>
            </ul>
        </>
    );
}

export default Ejercicio4