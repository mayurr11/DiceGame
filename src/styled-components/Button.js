import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  background-color: #000;
  color: #fff;
  border: 1px solid transparent;
  outline: none;
  min-width: 220px;
  font-size: 16px;
  font-weight: 550;
  transition: 0.4s background-color ease-in;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #000;
    border: 1px solid black;
    transition: 0.3s background-color ease-in;
  }
`;

export const OutlineButton = styled(Button)`
background-color: #fff;
color: #000;
border-color: #000;

&:hover {
    color: #ffffff;
    background-color: #000;
    border: 1px solid black;
    transition: 0.3s background-color ease-in;
  }
`;
