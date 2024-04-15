import { Component } from 'react';

import Button from 'components/Button';
import FormInput from 'components/FromInput/FormInput';
import { StyledForm } from './ContactForm.styled';

const initialState = {
  name: '',
  number: '',
};

const patternName =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const patternNumber =
  '+?d{1,4}?[ .-s]?(?d{1,3}?)?[ .-s]?d{1,4}[ .-s]?d{1,4}[ .-s]?d{1,9}';

export default class ContactForm extends Component {
  state = { ...initialState };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <FormInput
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern={patternName}
          value={this.state.name}
          cbOnChange={this.handleChange}
        />
        <FormInput
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern={patternNumber}
          value={this.state.number}
          cbOnChange={this.handleChange}
        />

        <Button title="Add contact" />
      </StyledForm>
    );
  }
}
