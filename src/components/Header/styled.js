import styled from "styled-components";
import screensSize from "../screens";
import mainIllustration from "../../assets/images/illustration-main-fs8.png";

const theme = {
  textColor: "#11223f"
};

const breakpoints = {
  headerColumn: screensSize.large
};

export const ContainerStyled = styled.div`
  padding: 0px 45px;
  @media (max-width: ${screensSize.medium}) {
    padding: 0px 15px;
  }
  display: flex;
  flex-direction: row;

  font-family: Muli;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: ${theme.textColor};

  @media (max-width: ${breakpoints.headerColumn}) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  max-width: 600px;
  line-height: 1.5;
`;
export const Description = styled.h2`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  max-width: 600px;
  @media (max-width: ${screensSize.medium}) {
    line-height: 1.5;
  }
`;
export const ActionButton = styled.button``;
export const HeaderContent = styled.div`
  flex: 1;
  flex-direction: column;

  @media (max-width: ${breakpoints.headerColumn}) {
    background-image: none;
  }

  background-image: url(${mainIllustration});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right 80px;
`;
export const IllustrationMain = styled.div`
  position: relative;
  flex: 1;
  justify-content: center;
  display: none;
  img {
    max-width: 500px;
    width: 100%;
    z-index: -1;
  }

  @media (max-width: ${breakpoints.headerColumn}) {
    display: flex;
  }
`;
