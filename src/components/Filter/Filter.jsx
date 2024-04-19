//COMPONENTS
import FormInput from 'components/FromInput/FormInput';
//CONTEXT
import { useGlobalContext } from 'context/GlobalProvider/GlobalProvider';
//STYLES
import { StyledForm, StyledTitle } from './Filter.styled';

function Filter() {
  const { handleChange, filter } = useGlobalContext();

  return (
    <StyledForm>
      <StyledTitle>Find contacts by name</StyledTitle>
      <FormInput name="filter" value={filter} cbOnChange={handleChange} />
    </StyledForm>
  );
}

export default Filter;
