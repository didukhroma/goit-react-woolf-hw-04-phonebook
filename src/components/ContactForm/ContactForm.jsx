import { useState } from 'react';
//COMPONENTS
import Button from 'components/Button';
import FormInput from 'components/FromInput/FormInput';
//SETTINGS
import {
  INITIAL_STATE_FORM,
  PATTERN_NAME,
  PATTERN_NUMBER,
} from 'settings/settings';
//STYLES
import { StyledForm } from './ContactForm.styled';

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
      <FormInput
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        pattern={PATTERN_NAME}
        value={contact.name}
        cbOnChange={handleChange}
      />
      <FormInput
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        pattern={PATTERN_NUMBER}
        value={contact.number}
        cbOnChange={handleChange}
      />

      <Button title="Add contact" />
    </StyledForm>
  );
}
