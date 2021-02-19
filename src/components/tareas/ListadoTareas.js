import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'

import Tarea from './Tarea'



const ListadoTareas = () => {


    //State de proyectos

    const proyectosContext = useContext(proyectoContext)
    const { proyecto, eliminarProyecto } = proyectosContext

    //Si non hay proyecto seleccionado

    if (!proyecto) return <h2>Selecciona un proyecto</h2>
    //Array destructuring

    const [proyectoActual] = proyecto

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataformas de pago', estado: false },
        { nombre: 'Elegir Hosting', estado: true },
    ]

    //Eliminar proyecto

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }
    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre} </h2>

            <ul className='listado-tareas'>
                {tareasProyecto.length === 0 ?
                    (<li className='tarea'><p>No hay tareas</p></li>)
                    :
                    tareasProyecto.map((tarea, idx) => (
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