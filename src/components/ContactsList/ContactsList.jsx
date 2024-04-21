//COMPONENTS
import ContactsItem from 'components/ContactsItem';
//STYLES
import { StyledList } from './ContactsList.styled';

function ContactsList({ contacts, deleteContact }) {
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
