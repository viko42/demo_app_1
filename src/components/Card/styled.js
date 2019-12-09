import styled, { css } from "styled-components";
import screensSize from "../screens";

import quote from "../../assets/images/IllustrationQuote-fs8.png";
import cornerCard from "../../assets/images/DecorationCorner-fs8.png";

const theme = {
  bg: "#ffffff",
  bgLight: "#f3f7ff",
  title: "#11223f",
  description: "#11223f",
  jobTitle: "#1967fa",
  dottedLine: "#1968fc"
};

const flexSize = {
  "4": "33.33%",
  "6": "50%",
  "12": "100%"
};

export const ContainerStyled = styled.div`
  min-height: 100px;
  min-width: 100px;
  flex: 0 0 50%;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 60px 0 rgba(25, 104, 252, 0.1);
  background-color: ${theme.bg};

  max-width: 540px;
  @media (max-width: ${screensSize.medium}) {
    max-width: unset;
  }
  margin: 0px 15px;
  display: flex;
  flex-direction: column;

  background-image: url(${quote});
  background-repeat: no-repeat;
  background-position: right;
  background-position-y: top;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Avatar = styled.div`
  img {
    border-radius: 60px;
    width: 100px;
    height: 100px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  margin: 10px;
`;
export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.div`
  font-family: Muli;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: ${theme.title};
`;
export const JobTitle = styled.div`
  opacity: 0.8;
  font-family: Muli;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  color: ${theme.jobTitle};
`;
export const Description = styled.div`
  font-family: Muli;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  color: ${theme.description};
  padding: 10px;
`;

export const FeatureHeader = styled.div`
  flex-direction: row;
  display: flex;
  background-color: ${theme.bgLight};
  max-height: 120px;
`;

export const StepContainer = styled.div`
  min-height: 100px;
  min-width: 100px;
  box-shadow: 0 20px 60px 0 rgba(49, 69, 244, 0.1);
  background-color: ${theme.bg};
  padding: 40px;
  max-width: 250px;
  position: relative;
  @media (max-width: ${screensSize.medium}) {
    max-width: unset;
    margin-top: 30px;
  }
  h1 {
    font-family: Muli;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-transform: uppercase;
    color: ${theme.title};
  }
  h2 {
    font-family: Muli;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    color: ${theme.jobTitle};
    text-transform: uppercase;
    margin-bottom: 25px;
  }
  span {
    font-family: Muli;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    color: ${theme.title};
  }
  .stepImg {
    position: absolute;
    top: 40px;
    right: 20px;
    width: 40px;
    height: 36px;
  }
  &:hover {
    box-shadow: 0 20px 60px 0 rgba(49, 69, 244, 0.15);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  &::before {
    position: absolute;
    content: url(${cornerCard});
    bottom: 10px;
    right: 10px;
    width: 10px;
    height: 10px;
  }
  &::after {
    position: absolute;
    border-bottom: dotted 4px ${theme.dottedLine};
    content: "";
    width: ${props => (props.withBgLine ? "100%" : "0%")};
    z-index: -1;
    @media (max-width: ${screensSize.medium}) {
      transform: rotate(90deg);
      left: 0px;
      bottom: 0px;
      right: 0px;
      margin: auto;
      width: ${props => (props.withBgLine ? "100px" : "0px")};
    }
  }
`;

export const FeatureContainer = styled(StepContainer)`
  padding: 0px;
  max-width: 330px;
  h1 {
    flex: 1;
    justify-content: flex-start;
    padding: 20px;
    align-items: center;
    display: flex;
    font-family: Muli;
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${theme.title};
    text-transform: unset;
  }
  &::after {
    border-bottom: 0px;
    @media (max-width: ${screensSize.medium}) {
      border-bottom: dotted 4px ${theme.dottedLine};
    }
  }
`;
export const StepTitles = styled.div``;
export const FeatureImg = styled.div`
  img {
  }
`;

export const FeatureDescription = styled.div`
  padding: 40px;
`;
export const SectionCol = styled.div`
  flex: 1;
  &:first-child {
    margin-bottom: ${props => (props.shift ? "200px" : "0px")};
  }
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.align || "center"};

  ${props => css`
    @media (max-width: ${screensSize.xSmall}) {
      flex: 1 0 ${flexSize[props.xs || "4"]};
    }
    @media (min-width: ${screensSize.xSmall}) and (max-width: ${screensSize.small}) {
      flex: 1 0 ${flexSize[props.sm || "4"]};
    }
    @media (min-width: ${screensSize.small}) and (max-width: ${screensSize.medium}) {
      flex: 1 0 ${flexSize[props.md || "4"]};
    }
    @media (min-width: ${screensSize.medium}) and (max-width: ${screensSize.large}) {
      flex: 1 0 ${flexSize[props.lg || "4"]};
    }
    @media (min-width: ${screensSize.large}) {
      flex: 1 0 ${flexSize[props.xlg || "4"]};
    }
  `}

  @media (max-width: ${screensSize.medium}) {
    align-items: unset;
    &:first-child {
      margin-bottom: 0px;
    }
  }

  ${props =>
    props.fullSize &&
    css`
      padding: 10px 20px;
      box-sizing: border-box;
      @media (max-width: ${screensSize.medium}) {
        padding: 10px 0px;
      }
    `}
`;
export const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 20px 20px;
  margin: 20px;
  @media (max-width: ${screensSize.medium}) {
    margin: 20px 0px;
  }
  background-color: ${theme.bg};

  h1 {
    font-family: Muli;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: ${theme.jobTitle};
    text-transform: uppercase;
  }
  span {
    font-family: Muli;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    color: ${theme.description};
  }
`;

export const SolutionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  background-color: ${theme.bg};

  img {
    width: 80px;
    height: 80px;
  }
  span {
    margin-left: 15px;
    font-family: Muli;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.22;
    letter-spacing: normal;
    color: #000000;
  }

  /* Fullsize */
  ${props =>
    props.fullSize &&
    css`
      width: 100%;
    `}
`;
