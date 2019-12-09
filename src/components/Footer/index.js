import React from "react";
import { ContainerStyled, Logo, Links, FaceImg } from "./styled";

import LogoGroup from "../../assets/images/group-2@2x-fs8.png";
import FaceVincent from "../../assets/images/VincentIllustration-fs8.png";

function Footer() {
  return (
    <ContainerStyled>
      <Logo src={LogoGroup} alt="logo_group" />
      <Links>
        <li>Contact</li>
        <li>Feedback</li>
        <li>Join our slack</li>
        <li>Terms</li>
      </Links>
      <FaceImg src={FaceVincent} alt="face_vincent" />
    </ContainerStyled>
  );
}

export default Footer;
