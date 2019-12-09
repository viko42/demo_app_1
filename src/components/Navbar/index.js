import React from "react";
import {
  ContainerStyled,
  LogoContainer,
  ActionsContainer,
  Action
} from "./styled";
import ActionButton from "../Button";
import sourceLogo from "../../assets/images/logo@3x-fs8.png";

function Navbar() {
  const handleClick = id => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <ContainerStyled>
      <LogoContainer>
        <img src={sourceLogo} alt="logo" />
      </LogoContainer>
      <ActionsContainer>
        <Action onClick={() => handleClick("steps")}>How it works</Action>
        <Action onClick={() => handleClick("features")}>Features</Action>
        <Action onClick={() => handleClick("jobs")}>Use cases</Action>
        <Action onClick={() => handleClick("schedule")}>Schedule a demo</Action>
        <ActionButton>Upload Sketch</ActionButton>
      </ActionsContainer>
    </ContainerStyled>
  );
}

export default Navbar;
