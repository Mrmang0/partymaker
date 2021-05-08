import styled from "styled-components";

const Input = styled.input`
  color: ${({ theme }) => theme.color};
  background-color: rgba(255, 255, 255, 0.1);
  border: ${({ theme }) => theme.controlBackground} solid 0.1rem;
  box-sizing: border-box;
`;

export default Input;
