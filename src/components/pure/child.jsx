import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');


    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text imput ${text}`);
    }

    function pressButtonParams(text){
        alert(`Text ${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }



    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('On Mouse over')} > Hello {name}</p>
            <button onClick={() => console.log('Pressed Button 1')}>
                Button 1
            </button>
            <button onClick={pressButton}>
                Button 2
            </button>
            <button onClick={ () => pressButtonParams('Hello')}>
                Button 3
            </button>
            <input 
                placeholder='Send a text to Father' 
                onFocus={() => console.log('Input focused')}
                onChange={(e) => console.log('Input changed:', e.target.value)}
                onCopy={() => console.log('Copied text from input')}
                ref={messageRef}
            ></input>
            <button onClick={ () => send(messageRef.current.value) }>
                Send Message
            </button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input placeholder='New name' ref={nameRef}>  
                    </input>
                    <button type='submit'>
                        Update name
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Child;
