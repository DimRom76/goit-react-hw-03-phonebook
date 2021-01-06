import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contactId),
    }));
  };

  handleInput(event) {
    this.setState({ filter: event.target.value });
  }

  onSubmit = values => {
    const { contacts } = this.state;
    if (
      contacts.some(el => el.name.toLowerCase() === values.name.toLowerCase())
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    values.id = uuidv4();
    const newContacts = contacts.concat(values);
    this.setState(prevState => {
      return { ...prevState, contacts: newContacts };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter handleInput={this.handleInput} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
