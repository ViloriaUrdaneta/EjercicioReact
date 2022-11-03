import React, { useState } from 'react';
import PropTypes from 'prop-types';



const GreetingF = (props) => {

    //breve introducción a useState
    const [age, setage] = useState(33);

    const birthday = () =>{
        setage(age + 1)
    }

    return (
        <div>
            <div>
                <h1>Hola {props.name}!! dezde componente funcional
                </h1>
            </div>
            <h2>
                    Tu edad es: {age}
                </h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
