import { Input } from "antd";
import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.controlBackground};
  height: 100%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding: 0.5rem;
`;

export default Button;
