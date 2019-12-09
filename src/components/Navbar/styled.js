import styled from "styled-components";
import screensSize from "../screens";

const theme = {
  ActionColor: "#000000",
  ActionButtonBg: "#1968fc"
};

export const ContainerStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0px 45px;
  @media (max-width: ${screensSize.medium}) {
    padding: 0px 15px;
  }
`;
export const LogoContainer = styled.div`
  max-width: 160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: inherit;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  @media (max-width: ${screensSize.medium}) {
    display: none;
  }
`;

export const Action = styled.span`
  padding: 20px 30px;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: ${theme.ActionColor};
  user-select: none;
  &:hover {
    cursor: pointer;
    background-color: #edf0f8;
  }
  &:active {
    background-color: #dcdfe8;
  }
`;

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
  &:hover {
    cursor: pointer;
    background-color: #1d6cff;
  }
  &:active {
    background-color: #1459d9;
  }
`;
