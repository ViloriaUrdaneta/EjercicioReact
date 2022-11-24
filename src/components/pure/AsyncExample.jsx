import React from 'react';

const AsyncExample = () => {
    


    async function generateNumber(){
        return 1; //devolvemos valor que surge de una ejecución x
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2)
    }

    function obtainNumber(){
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    function obtainPromiseNumber(){
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    async function saveSessionStorage(key, value){
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage(){
        saveSessionStorage('name', 'Miguel')
            .then((response) => {
                let value = response;
                alert(`Saved name: ${value}`)
            }).catch((error) => {
                alert(`Something went wrong: ${error}`)
            }).finally(() => console.log('Name saved a retrieved succesfully'))
    }

    async function obtainMessage(){

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello world'), 2000)
        });

        let message = await promise;

        await alert(`Message received: ${message}`)

    }

    const returnError = async() => {
        await Promise.reject(new Error('errorrrr'));
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is ok`))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert('Finally executed'))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong with your URL: ${error}`)
        }
    }

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2'),
            ]
        ).catch((error) =>alert(`Something went wrong with your URL: ${error}`))
    }


    return (
        <div>
            <h1>Async, promise examples</h1>
            <button onClick={obtainNumber}>Obtain number</button>
            <button onClick={obtainPromiseNumber}>Obtain promise number</button>
            <button onClick={showStorage}>Save and show name</button>
            <button onClick={obtainMessage}>Send message in 2 seconds</button>
            <button onClick={consumeError}>Obtain error</button>
            <button onClick={urlNotFound}>Request to Unknown URL</button>
            <button onClick={multiplePromise}>Multiple Promises</button>
        </div>
    );
}

export default AsyncExample;
