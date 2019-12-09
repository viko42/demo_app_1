import styled from "styled-components";
import screensSize from "../screens";

const theme = {
  bg: "#1968fc",
  text: "#11223f"
};

export const ContainerStyled = styled.div`
  min-height: 100px;

  flex: 0 0 50%;
  padding: 0px 45px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  @media (max-width: ${screensSize.medium}) {
    padding: 0px 15px;
  }
`;

export const SectionTitleContainer = styled.h1`
  font-family: Muli;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-transform: uppercase;
  position: relative;
  padding-left: 20px;
  color: ${props => props.color || theme.text};

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 2px;
    box-shadow: 0 2px 0 0 #d1e1fe;
    background-color: ${theme.bg};
    left: 0px;
    position: absolute;
  }
`;
