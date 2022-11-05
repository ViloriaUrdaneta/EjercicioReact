/**
 * Ejemplo de componente de tipo clase que dispone
 * de los métodos de ciclo de vida
 */

import { Component } from "react";
//import PropTypes from 'prop-types';

class LifeCycleExample extends Component {

        constructor(props) {
            super(props)
            console.log('CONSTRUCTOR: cuando se instancia el componente')
        }

        componentWillMount() {
            console.log('WILLMOUNT: antes del montaje del componente')
        }

        componentDidMount() {
            console.log('DIDMOUNT: justo al acabar el montaje del componente, antes de renderizarlo')
        }

        componentWillReceiveProps(nextProps) {
            console.log('WILLRECEIVEPROPS: si va a recibir nuevas props')
        }

        shouldComponentUpdate(nextProps, nextState) {
            /**
             * sirve para controlar si el componenete debe o no actualizarse
             * retorna boolean true or false
             */
        }

        componentWillUpdate(nextProps, nextState) {
            console.log('WILLUPDATE: justo antes de actualizarse')
        }

        componentDidUpdate(prexProps, prevState) {
            console.log('DIDUPDATE: justo después de actualizarse')
        }

        componentWillUnmount(){
            console.log('WILLUNMOUNT: justo antes de desaparecer')
        }


        render(){
            return (
                <div>

                </div>
            )
        }
}

/** 
LifeCycleExample.PropTypes = {

}*/