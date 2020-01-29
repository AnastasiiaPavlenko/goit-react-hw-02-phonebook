import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
const uuidv1 = require('uuid/v1');

class App extends Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', number: '4591256', id: 'id-1' },
      { name: 'Hermione Kline', number: '4438912', id: 'id-2' },
      { name: 'Eden Clements', number: '6451779', id: 'id-3' },
      { name: 'Annie Copeland', number: '2279126', id: 'id-4' },
    ],
    filtered: [],
  }

  onSubmit = (name, number, reset) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, {
        name: name,
        number: number,
        id: uuidv1()
      }]
    }));
    reset();
  };

  handleFilter = (query) => {
    const filteredContacts = this.state.contacts.filter(
      e =>
        e.name.toLowerCase().includes(query.toLowerCase())
    );

    //   this.setState((prevState) => ({
    //     filtered: [prevState, ...filteredContacts],
    //   }));
    //   console.log("filtered", this.state.filtered);
    // };

    this.setState(() => ({
      filtered: [...filteredContacts],
    }));
  };

  render() {
    const { contacts, filtered } = this.state;
    return <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.onSubmit} />
      <h2>Contacts</h2>
      <Filter handleFilter={this.handleFilter} />
      <ContactList contacts={contacts} filtered={filtered} />
    </>
  }
};

export default App;

