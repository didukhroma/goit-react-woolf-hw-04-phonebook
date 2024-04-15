import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  padding: 0 10px;

  &:hover {
    cursor: pointer;
  }
  &:active {
    color: white;
    background-color: blue;
  }
`;
