import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
import Tarea from './Tarea'



const ListadoTareas = () => {


    //State de proyectos

    const proyectosContext = useContext(proyectoContext)
    const { proyecto, eliminarProyecto } = proyectosContext


    //State de tareas

    const tareasContext = useContext(tareaContext)
    const { tareasproyecto } = tareasContext

    //Si non hay proyecto seleccionado

    if (!proyecto) return <h2>Selecciona un proyecto</h2>
    //Array destructuring

    const [proyectoActual] = proyecto



    //Eliminar proyecto

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }
    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre} </h2>

            <ul className='listado-tareas'>
                {tareasproyecto.length === 0 ?
                    (<li className='tarea'><p>No hay tareas</p></li>)
                    :
                    tareasproyecto.map((tarea, idx) => (
                        <Tarea
                            key={idx}
                            tarea={tarea}
                        />
                    ))
                }

            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
                onClick={onClickEliminar}>
                &times; Eliminar Proyecto
                </button>

        </>
    );
}

export default ListadoTareas;