import styled from "styled-components";

const theme = {
  ActionButtonBg: "#1968fc"
};

export const ActionButton = styled.button`
  padding: 15px 20px;
  text-decoration: none;
  border: 0px;
  background-color: ${theme.ActionButtonBg};
  color: white;
  box-shadow: 0 10px 40px 0 rgba(25, 104, 252, 0.3);
  margin: 10px;
  outline: 0px;
  text-transform: uppercase;

  font-family: Muli;
  &:hover {
    cursor: pointer;
    background-color: #1d6cff;
  }
  &:active {
    background-color: #1459d9;
  }
`;
