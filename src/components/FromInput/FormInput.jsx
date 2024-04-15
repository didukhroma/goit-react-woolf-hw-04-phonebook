import capitalize from 'helpers/capitalize';
import { StyledLabel, StyledInput } from './FormInput.styled';

function FormInput({ type, name, title, pattern, value, cbOnChange }) {
  return (
    <StyledLabel>
      <span>{capitalize(name)}</span>
      <StyledInput
        name={name}
        type={type}
        title={title}
        value={value}
        onChange={cbOnChange}
        pattern={pattern}
        required
      />
    </StyledLabel>
  );
}

export default FormInput;
