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
    filter: "",
  };

  onSubmit = (name, number, reset) => {
    if (this.state.contacts.map(contact => contact.name !== name)) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, {
          name: name,
          number: number,
          id: uuidv1()
        }]
      }));
    } else {
      alert(`${name} is already in contacts!`);
    };
    reset();
  };

  changeFilter = filter => {
    this.setState({ filter });
  };


  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  removeContact = id => {
    console.log(id);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.onSubmit} />
      <h2>Contacts</h2>
      {visibleContacts.length >= 1 && (
        <Filter value={filter} onChangeFilter={this.changeFilter} />
      )}
      {visibleContacts.length > 0 && (
        <ContactList contacts={visibleContacts} onRemove={this.removeContact} />
      )}
    </>
  };
};

export default App;

