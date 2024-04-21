import { useEffect, useState } from 'react';
// COMPONENTS
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import Container from 'components/Container';
import Notification from 'components/Notification';
//HELPERS
import WEB_API from 'helpers/localStorage';
import generateID from 'helpers/generateID';
//SETTINGS
import { INITIAL_STATE_APP } from 'settings/settings';
//STYLES
import { StyledMainTitle, StyledTitle } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(WEB_API.getData);
  const [filter, setFilter] = useState(INITIAL_STATE_APP.filter);

  useEffect(() => {
    WEB_API.setData(contacts);
  }, [contacts]);

  const addContact = contact => {
    const isExist = contacts.find(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    const newContact = { id: generateID(), ...contact };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  const handleChangeFilter = ({ target: { value } }) => setFilter(value);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Container>
      <StyledMainTitle>Phonebook</StyledMainTitle>
      <ContactForm addContact={addContact} />
      <StyledTitle>Contacts</StyledTitle>
      <Filter filter={filter} handleChange={handleChangeFilter} />
      <ContactsList contacts={filteredContacts} deleteContact={deleteContact} />
      {!contacts.length && <Notification />}
    </Container>
  );
}
