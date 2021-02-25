import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticación/authContext'

const Barra = () => {

    //Extraer la información de autenticación
    const authContext = useContext(AuthContext)
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext

    useEffect(() => {
        usuarioAutenticado()

        //esLint-disable-next-line
    }, [usuarioAutenticado])

    return (
        <header className='app-header'>
            {usuario ? <p className='nombre-usuario'>Hola <span>{usuario.nombre}</span></p> : null}

            <nav className='nav-principal'>
                <button
                    className="btn btn-white cerrar-sesion"
                    onClick={cerrarSesion}
                >Cerrar sesión</button>
            </nav>
        </header>
    );
}

export default Barra;