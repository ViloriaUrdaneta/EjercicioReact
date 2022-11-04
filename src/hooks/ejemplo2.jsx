/**
 * Ejemplo de:
 * useState
 * useRef
 * useEffect
 */

import React, {useState, useRef, useEffect} from 'react';



const Ejemplo2 = () => {

/**
 * Crear dos contadores distintos cada uno en un estado diferente
 */
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    /**
     * Crear una referencia con useRef para asociar
     * una variable con un componente de la vista
     */
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1)
    }

    function incrementar2(){
        setContador2(contador2 + 1)
    }

    /**
     * UseEffect
     * caso 1 ejecuta siempre un snippet de codigo
     * cada vez que hay un cambio en el estado del componente se 
     * ejecuta lo que este dentro del useEffect
     */

    useEffect(() => {
        
        console.log('Cambio en el estado del componente');
        console.log('Mostrardo referendia a elemento del DOM');
        console.log(miRef);
        })

    return (
        <div>
            <h1>Ejemplo de useStage, useRef y useEffect</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/**Elemento referenciado*/}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/**Botones para cambiar contadores*/}
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
        </div>
    );
}

export default Ejemplo2;
