/**
 * Ejemplo de uso del método componentWilUnmoint para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

//tipo clase
class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnMount
                </h1>
            </div>
        );
    }
}


//tipo hook
export const WillUnMountHook = () => {

    useEffect(() => {
        //acá no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, []);


    return (
        <div>
            <h1>
                WillUnMount
            </h1>
        </div>
    );
}




