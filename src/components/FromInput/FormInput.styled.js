import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 16px;

  text-align: start;

  & span {
    margin-bottom: 8px;
  }
`;

export const StyledInput = styled.input`
  min-width: 160px;
  max-width: fit-content;
`;
