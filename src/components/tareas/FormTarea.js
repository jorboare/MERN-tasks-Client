import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'


const FormTarea = () => {

    //Extraer si un proyecto está activo

    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext

    if (!proyecto) return null

    //Array destructuring

    const [proyectoActual] = proyecto

    const onSubmit = e => {
        e.preventDefault()

        //validar

        //pasar la valudación


        //agragar la nueva tarea al state de tareas

        //reiniciar el form
    }
    return (
        <div className='formulario'>
            <form

                onSubmit={onSubmit}>
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='nombre Tarea...'
                        name='nombre'
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
        </div>
    );
}

export default FormTarea;