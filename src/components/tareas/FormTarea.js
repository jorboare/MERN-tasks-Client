import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
import { v4 as uuidv4 } from 'uuid'


const FormTarea = () => {

    //Extraer si un proyecto está activo

    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext

    //Obtener la funcion context de tarea
    const tareasContext = useContext(tareaContext)
    const { errortarea, agregarTareas, validarTarea, obtenerTareas } = tareasContext

    //State del formulario

    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    //Extraer el nombre del proyecto

    const { nombre } = tarea

    //Si no hay proyecto seleccionado
    if (!proyecto) return null

    //Array destructuring

    const [proyectoActual] = proyecto

    //Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        //validar
        if (nombre.trim() === '') {
            validarTarea()
            return
        }

        //agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id
        tarea.estado = false
        tarea.id = uuidv4()
        agregarTareas(tarea)

        //Obtener y filtrar las tareas

        obtenerTareas(proyectoActual.id)

        //reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }
    return (
        <div className='formulario'>
            <form

                onSubmit={onSubmit}>
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre Tarea...'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Agregar Tarea'
                    />
                </div>
            </form>
            {errortarea ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}

export default FormTarea;