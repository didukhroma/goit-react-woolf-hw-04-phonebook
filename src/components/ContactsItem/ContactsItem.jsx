//COMPONENTS
import Button from 'components/Button';
//STYLES
import { StyledLi, StyledP, StyledSpan } from './ContactsItem.styled';

function ContactsItem({ name, number, id, cbOnClick }) {
  return (
    <StyledLi>
      <StyledP>
        <StyledSpan>{`${name}:`}</StyledSpan>
        <span>{number}</span>
      </StyledP>
      <Button cbOnClick={cbOnClick} id={id} title="Delete" />
    </StyledLi>
  );
}

export default ContactsItem;
