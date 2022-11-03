import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                This contact's name is: {contact.name}
            </h2>
            <h5>
                This contact is: {contact.conected ? 'Conected':'Not conected'}
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;

