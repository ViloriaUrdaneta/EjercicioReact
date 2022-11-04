/**
 * Ejemplo de uso del Hook useStage
 * 
 * Crear componente de tipo funcion y acceder a su
 * estado privado a traves del hook y modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const initialValue = 0;

    //Valor inicial para persona
    const initialPerson = {
        name : 'Miguel',
        email : 'miguel@email.com'
    }

    /**
     * Queremos que initialValue y initialPerson sean parte del
     * estado del componente
     * para así poder gestionar su cambio y sea reflejado en la vista
     */

    const [contador, setContador] = useState(initialValue);

    const [persona, setPersona] = useState(initialPerson);

    /**
     * Funcion para actualizar estado privado que contiene el contador
     */
    function incrementarContador(){
        setContador(contador + 1)
    }

    /**
     * Funcion para actualizar estado de persona en el componente
     */
    function actualizarPersona(){
        setPersona(
            {
                name: 'Pepe',
                email: 'pepe@email.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useStage</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona: {persona.name}</h2>
            {/**Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Cambiar a Pepinho</button>
        </div>
    );
}

export default Ejemplo1;
