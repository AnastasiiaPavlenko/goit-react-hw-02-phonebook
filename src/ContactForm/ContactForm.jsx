import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Buttons.module.css';

class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    state = {
        name: '',
        number: '',
    };

    handleChange(event) {
        if (event.target.name === "name") {
            this.setState({ name: event.target.value });
        } else if (event.target.name === "amount") {
            this.setState({ number: event.target.value });
        };
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    handleChange = this.handleChange.bind(this);

    render() {
        const { name, number } = this.state;
        return <form id="form" className="form">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" value={this.state.name} className="input" onChange={this.handleChange} />
            <label htmlFor="number">Number</label>
            <input id="number" type="number" name="amount" value={this.state.number} className="input" onChange={this.handleChange} />
            <button form="form" type="button" className="button" onClick={() => this.props.onSubmit(name, number, this.reset)}>Add contact</button>
        </form>
    };
};

export default ContactForm;
