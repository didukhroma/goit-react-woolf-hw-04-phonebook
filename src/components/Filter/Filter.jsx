//STYLES
import { StyledForm, StyledTitle } from './Filter.styled';
import { StyledLabel } from 'components/ContactForm/ContactForm.styled';

function Filter({ handleChange, filter }) {
  return (
    <StyledForm>
      <StyledTitle>Find contacts by name</StyledTitle>
      <StyledLabel>
        <span>Name</span>
        <input
          name="filter"
          type="text"
          title="filtered contacts"
          value={filter}
          onChange={handleChange}
          required
        />
      </StyledLabel>
    </StyledForm>
  );
}

export default Filter;
