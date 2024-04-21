import { useState } from 'react';
//COMPONENTS
import Button from 'components/Button';
//SETTINGS
import { INITIAL_STATE_FORM } from 'settings/settings';
//STYLES
import { StyledForm, StyledLabel } from './ContactForm.styled';

export default function ContactForm({ addContact }) {
  const [contact, setContact] = useState(INITIAL_STATE_FORM);

  const handleSubmit = evt => {
    evt.preventDefault();
    addContact(contact);
    setContact(INITIAL_STATE_FORM);
  };

  const handleChange = ({ target: { name, value } }) =>
    setContact(prev => {
      return { ...prev, [name]: value };
    });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        <span>Name</span>
        <input
          name="name"
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={contact.name}
          onChange={handleChange}
          // eslint-disable-next-line no-useless-escape
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </StyledLabel>
      <StyledLabel>
        <span>Number</span>
        <input
          name="number"
          type="tel"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={contact.number}
          onChange={handleChange}
          // eslint-disable-next-line no-useless-escape
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </StyledLabel>

      <Button title="Add contact" />
    </StyledForm>
  );
}
