/**
 * Ejemplo de useState
 * useContext
 */

import React, { useState, useContext } from 'react';


/**
     * inicializamos estado vacio que va a llenarse
     * con los datos del padre
     */
 const miContexto = React.createContext(null)
/**
 * tiene un contexto con un valor que recibe
 * desde el padre
 */
const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El Token es: {state.token}
            </h1>
            {/**pintamos componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {state.session}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto() {


    const estadoInicial = {
        token: '1234567',
        session: 1
    }

    //creamos estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'qwerty',
                session: sessionData.session + 1
            }
        )
    }



    return (
        <miContexto.Provider value = {sessionData}>
            {/**todo lo que esta aca puede lees los datos de session data */}
            <h1>Ejemplo de useState y useContext</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar sesión</button>
        </miContexto.Provider>
    )
}


