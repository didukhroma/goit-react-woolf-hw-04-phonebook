import FormInput from 'components/FromInput/FormInput';
import { StyledForm, StyledTitle } from './Filter.styled';

function Filter({ cbOnChange, value }) {
  return (
    <StyledForm>
      <StyledTitle>Find contacts by name</StyledTitle>
      <FormInput name="filter" value={value} cbOnChange={cbOnChange} />
    </StyledForm>
  );
}

export default Filter;
