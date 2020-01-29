import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Buttons.module.css';
const uuidv1 = require('uuid/v1');

class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        filtered: PropTypes.array.isRequired,
    }

    render() {

        return <ul className="contactList" >
            {this.props.filtered.length > 0 ? (this.props.filtered.map(contact => (
                <li className="list-item" key={uuidv1()}>
                    {contact.name} : {contact.number}
                </li>
            ))) : (this.props.contacts.map(contact => (
                <li className="list-item" key={uuidv1()}>
                    {contact.name} : {contact.number}
                </li>
            )))
            }
            {/* {this.props.contacts.map(contact => (
                <li className="list-item" key={uuidv1()}>
                    {contact.name} : {contact.number}
                </li>
            ))} */}
        </ul>
    }
};


export default ContactList;
