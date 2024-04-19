// COMPONENTS
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import Container from 'components/Container';
//STYLES
import { StyledMainTitle, StyledTitle } from './App.styled';

export default function App() {
  return (
    <Container>
      <StyledMainTitle>Phonebook</StyledMainTitle>
      <ContactForm />
      <StyledTitle>Contacts</StyledTitle>
      <Filter />
      <ContactsList />
    </Container>
  );
}
