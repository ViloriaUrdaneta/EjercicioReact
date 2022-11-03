import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {
    
    const defaultContact = new Contact('John', 'Doe', 'johndoe@email.com', false)

    
    return (
        <div>
            <div>
                Your Contact:
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};



export default ContactListComponent;

