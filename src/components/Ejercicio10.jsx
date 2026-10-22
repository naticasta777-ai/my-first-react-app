import React, { useState } from 'react'

const Ejercicio10 = () => {
    const [tareas, setTareas] = useState([]);

    function agregarTarea() {
        const id = tareas.length + 1;
        setTareas([...tareas, { id, titulo: "Tarea " + id, hecha: false }]);
    }

    function completarTarea(id) {
        setTareas(tareas.map((tarea)=> (tarea.id === id? {...tarea, hecha:true} : tarea)))
    }

    return (
        <>
        <button onClick={agregarTarea}>Agregar Tarea</button>
        <ul>
            {tareas.map((tarea)=>{
                <li key={tarea.id}>
                    {tarea.titulo} {tarea.hecha ? "(Hecha)" : ""}
                    <button onClick={()=> completarTarea(tarea.id)}>Completar</button>
                </li>
            })}
        </ul>
        </>
    );
}

export default Ejercicio10
