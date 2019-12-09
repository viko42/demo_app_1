import React from "react";
import {
  ContainerStyled,
  Title,
  Description,
  HeaderContent,
  IllustrationMain
} from "./styled";
import sourceIllustration from "../../assets/images/illustration-main-fs8.png";
import ActionButton from "../Button";

function Headers() {
  return (
    <ContainerStyled>
      <HeaderContent>
        <Title>Launch beautiful websites directly from Sketch</Title>
        <Description>
          Create pixel perfect websites, landing pages & portfolios directly
          from your Sketch designs
        </Description>
        <ActionButton>Upload Your Sketch File</ActionButton>
      </HeaderContent>
      <IllustrationMain>
        <img src={sourceIllustration} alt="illu-main" />
      </IllustrationMain>
    </ContainerStyled>
  );
}

export default Headers;
