import { Component } from 'react';

import generateID from 'helpers/generateID';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import Container from 'components/Container';

import WEB_API from 'helpers/localStorage';

import { StyledMainTitle, StyledTitle } from './App.styled';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const LOCAL_STORAGE_KEY = 'contacts';

export default class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidMount() {
    const data = WEB_API.getData(LOCAL_STORAGE_KEY);
    data && this.setState({ contacts: data });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      WEB_API.setData(LOCAL_STORAGE_KEY, this.state.contacts);
    }
  }

  addContact = contact => {
    const isExist = this.state.contacts.find(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    const newContact = { id: generateID(), ...contact };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value.trim(),
    });
  };

  filteredContacts = () =>
    [...this.state.contacts].filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  render() {
    return (
      <Container>
        <StyledMainTitle>Phonebook</StyledMainTitle>
        <ContactForm addContact={this.addContact} />
        <StyledTitle>Contacts</StyledTitle>
        <Filter cbOnChange={this.handleChange} value={this.state.value} />
        <ContactsList
          contacts={this.filteredContacts()}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
