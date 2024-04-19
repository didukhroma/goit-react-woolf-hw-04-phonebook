import ContactsItem from 'components/ContactsItem';
import { StyledList } from './ContactsList.styled';
import { useGlobalContext } from 'context/GlobalProvider/GlobalProvider';

function ContactsList() {
  const { filteredContacts, deleteContact } = useGlobalContext();
  const contacts = filteredContacts();

  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          cbOnClick={deleteContact}
        />
      ))}
    </StyledList>
  );
}

export default ContactsList;
