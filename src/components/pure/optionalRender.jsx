import React, {useState} from 'react';

//Estilo para usuario loggeado
const loggedStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold'
}
//Estilo para usuario no loggeado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

//Login Logout buttons
const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}
const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}


const OptionalRender = () => {

    const [access, setAccess] = useState(true);
    const [nMessages, setNMessages] = useState(0);

    /**
     * Una forma de hacer los botones
    const updateAccess = () => {
        setAccess(!access);
    } 
    if(access){
        optionalButton = <button onClick={updateAccess}>Logout</button>
    } else{
        optionalButton = <button onClick={updateAccess}>Login</button>
    }
    */ 

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton;

    if(access){
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    } else{
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    //Unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            {/**Optional button */}
            { optionalButton }
            {/**N messages unread*/}
            { nMessages === 0 && <p>There are no messages</p>}
            { nMessages === 1 && <p>You have {nMessages} new message</p>}
            { nMessages > 1 && <p>You have {nMessages} new messages</p>}
            {/**Operador ternario */}
            <button onClick={addMessages}>{nMessages === 0 ? 'Add your first message' : 'Add new message'}</button>
        </div>
    );
}

export default OptionalRender;
