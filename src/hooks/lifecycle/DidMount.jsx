/**
 * Ejemplo del uso del métod uso de ciclo de vida
 * en componente clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { Component, useEffect } from 'react';


//tipo clase
export class DidMount extends Component {
    
    componentDidMount(){
        console.log('comportamiento antes que el componente renderice en el DOM')
    }
    
    render() {
        return (
            <div>
                <h1>
                    DidMount
                </h1>
            </div>
        );
    }
}


//tipo hook
export const DidMountHook = () => {

    useEffect(() => {
        console.log('comportamiento antes que el componente renderice en el DOM')
    }, []);

    return (
        <div>
            <h1>
                DidMount
            </h1>
        </div>
    );
}




