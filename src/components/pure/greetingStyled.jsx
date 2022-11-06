import React, { useState } from 'react';


/**
 * Definiendo estilos en constantes 
 */

//estilo para usuario loggeado
const loggedStyle = {
    color: 'white'
}

//estilo para usuario no loggeado
const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

/**
 * generamos estado para el componente
 * y asi controlar si el usuario esta o no loggeado
 */
    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, {props.name}</p>)
    const pleaseLogin = () => (<p>Please login</p>)

    return (
        <div style={ logged ? loggedStyle : unLoggedStyle }>
            { logged ? greetingUser() : pleaseLogin()}
            <button onClick={() =>{
                console.log('Botón pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
