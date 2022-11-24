import React, {useState} from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obteinNewNumbers = () => {

        console.log('Subscription to Observable')
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New number: ', newNumber);
                    setNumber(newNumber);
                },
                alert(error){
                    alert(`Something went wrong: ${error}`)
                },
                complete(){
                    alert(`Finished whit: ${number}`)
                }
            }
        )
    }


    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick={obteinNewNumbers}>
                Obtain new numbers
            </button>
        </div>
    );
}

export default ObservableExample;
