import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  background-color: #6558f5;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  padding: 7px 25px;
  font-family: NotoSans Regular;
  font-size: 15px;
  white-space: nowrap;
`;

function Button({ text, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;
