import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-bottom: 36px;
  padding: 24px;
  max-width: 360px;
  border: 1px solid black;
  text-align: left;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 16px;

  min-width: 160px;
  max-width: fit-content;
  text-align: start;

  & span {
    margin-bottom: 8px;
  }
`;
