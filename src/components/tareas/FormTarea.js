import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'


const FormTarea = () => {

    //Extraer si un proyecto está activo

    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext

    if (!proyecto) return null

    //Array destructuring

    const [proyectoActual] = proyecto

    return (
        <div className='formulario'>
            <form>
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