/**
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'


//tipo clase
export class DidUpdate extends Component {

  componentDidUpdate(){
    console.log('Comportamienti cuando el componente recibe nuevos props o cambio en su estado privado')
  }
    
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}


//tipo hook
export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamienti cuando el componente recibe nuevos props o cambio en su estado privado')
    });



    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}


