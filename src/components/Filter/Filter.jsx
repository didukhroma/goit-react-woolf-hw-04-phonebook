//COMPONENTS
import FormInput from 'components/FromInput/FormInput';
//STYLES
import { StyledForm, StyledTitle } from './Filter.styled';

function Filter({ handleChange, filter }) {
  return (
    <StyledForm>
      <StyledTitle>Find contacts by name</StyledTitle>
      <FormInput name="filter" value={filter} cbOnChange={handleChange} />
    </StyledForm>
  );
}

export default Filter;
