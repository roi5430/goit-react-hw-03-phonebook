import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { NameContactsList } from './NameContactsList/NameContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const mekeContacts = localStorage.getItem('contacts');
    const parse = JSON.parse(mekeContacts);
    if (mekeContacts !== null) {
      this.setState({ ccontacts: parse });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const checkName = contacts
      .map(contact => contact.name.toLowerCase())
      .some(contact => contact === name.toLowerCase());
    if (!checkName) {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            number,
            name,
          },
        ],
      }));
    } else {
      window.alert(`${name} is already in contacts`);
    }
  };

  searchContact = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContact = contactsId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <section>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.searchContact} value={filter} />
        <NameContactsList
          filter={filter}
          items={contacts}
          onDelete={this.deleteContact}
        />
      </section>
    );
  }
}
